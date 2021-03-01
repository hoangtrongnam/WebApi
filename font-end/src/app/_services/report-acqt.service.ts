import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class ReportACQTService {
    constructor(
        private http: HttpClient
        ) {
    }

    exportACQTExcel(request) {
        return this.http.post(`${environment.apiUrl}/report/request_for_providing_excel`, request, { responseType: 'blob' })
            .subscribe((result: Blob) => {
                // if (result.size == 0) {
                //    this.notifierService.error('Thông báo', 'Lỗi! Không thể export file!');
                // }
                // else {
                    var blob = new Blob([result]);
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    const currentTime = new Date();
                    var filename = "BAOCAO_ACQT_" + currentTime
                        .getFullYear().toString() + (currentTime
                            .getMonth() + 1) + currentTime
                                .getDate() + currentTime
                                    .toLocaleTimeString()
                                    .replace(/[ ]|[,]|[:]/g, '')
                                    .trim() + ".xlsx";
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                // }
            });
    }
    exportACQTPDF(request) {
        return this.http.post(`${environment.apiUrl}/report/request_for_providing_pdf`, request, { responseType: 'blob' })
            .subscribe((result: Blob) => {
                // if (result.size == 0) {
                //    this.notifierService.error('Thông báo', 'Lỗi! Không thể export file!');
                // }
                // else {
                    var blob = new Blob([result]);
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    const currentTime = new Date();
                    var filename = "BAOCAO_ACQT_" + currentTime
                        .getFullYear().toString() + (currentTime
                            .getMonth() + 1) + currentTime
                                .getDate() + currentTime
                                    .toLocaleTimeString()
                                    .replace(/[ ]|[,]|[:]/g, '')
                                    .trim() + ".pdf";
                    link.href = url;
                    link.setAttribute('download', filename);
                    document.body.appendChild(link);
                    link.click();
                // }
            });
    }
}