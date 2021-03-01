import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class QRCodeService {
    constructor(private http: HttpClient) {
    }
    getByIdDanhMuc_VM(){
        return this.http.post<any>(`${environment.apiUrl}/DanhMuc_VM/getByIdDanhMuc_VM`,{})
        .pipe(map(data => {
            return data;
        }))
    }
    GetAllCategory_VM(request){
        return this.http.post<any>(`${environment.apiUrl}/category/getcategory`,request)
        .pipe(map(data => {
            return data;
        }))
    }
    InsertDanhMuc_VM(request){
        return this.http.post<any>(`${environment.apiUrl}/category/Insert`,request)
        .pipe(map(data => {
            return data;
        }))
    }
    updateByIdDanhMuc_VM(request){
        return this.http.post<any>(`${environment.apiUrl}/category/update`,request)
        .pipe(map( data => {
            return data;
        }))
    }
    // deleteByIdDanhMuc_VM (id): Observable<{}> {
    //     const url = `${environment.apiUrl}/DanhMuc_VM/deleteByIdDanhMuc_VM?danhmuc_id=${id}`; // DELETE api/heroes/42
    //     return this.http.delete(url)
    //       .pipe(map(data => {
    //         return data;
    //     })
    //       );
    //   }
      deleteByIdDanhMuc_VM (id): Observable<{}> {
        const url = `${environment.apiUrl}/category/delete?danhmuc_id=${id}`; // DELETE api/heroes/42
        return this.http.post<any>(url,{id})
          .pipe(map(data => {
            return data;
        })
          );
      }
}
