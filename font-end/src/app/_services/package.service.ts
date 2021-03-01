
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';


@Injectable({ providedIn: 'root' })
export class PackageService {

    constructor(private http: HttpClient) {
    }
    GetByIdDetailPackage(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/by_id_detail`, request).toPromise();
    }

    GetByIdGoiACQT(GoiId) {
        return this.http.post<any>(`${environment.apiUrl}/package/by_id?pGoiId=${GoiId}`, {}).toPromise();
    }

    GetInNhanGoiACQT(GoiId) {
        return this.http.post<any>(`${environment.apiUrl}/package/print_lable_package?pGoiId=${GoiId}`, {})
            .pipe(map(data => {
                return data;
            }))
    }
    
    GetListGoiACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/getlist`, request)
            .pipe(map(data => {
                return data;
            }))
    }
    
    InsertACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/insert`, request).toPromise();
    }

    UpdateACQT(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/updateacqt`, request).toPromise();
    }
    // tạo gói
    InsertPackage(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/insert`, request).toPromise();
    }
    // tạo gói
    UpdatePackage(request) {
        return this.http.post<any>(`${environment.apiUrl}/package/updatepackage`, request).toPromise();
    }
    /// rả gói
    DeleteByIdPackage(id): Observable<{}> {
        const url = `${environment.apiUrl}/package/delete?goi_id=${id}`; // DELETE api/heroes/42
        return this.http.post<any>(url, { id })
            .pipe(map(data => {
                return data;
            }));
    }
    // tìm kiếm gói
    SearchPackage(request) {
        return this.http.post<any>(`${environment.apiUrl}/search/searchpackage`, request)
            .pipe(map(data => {
                return data;
            }));
    }
    // đóng gói 
    ClosePackage(request){
        return this.http.post<any>(`${environment.apiUrl}/package/close`, request).toPromise();
    }

    dividedPackage(goi_id){
        return this.http.get<any>(`${environment.apiUrl}/package/extract_package?goi_id=`+ goi_id).toPromise();
    }
}

