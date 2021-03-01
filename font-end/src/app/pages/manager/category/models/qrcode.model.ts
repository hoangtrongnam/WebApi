export class DanhMuc_VMModel
{
     Reflist : Reflist;
}

export class Reflist {
    danhmuc_id : number;
    loai_acqt : string;
    ma_an_chi : string;
    kyhieu : string;
    donvitinh : string;
    ngayketthuc : Date;
    sldonggoi : number;
    sldongthung : number;
    comavach : string;
    created_date : Date;
    user_created : string;
    modified_date : Date;
    user_modified : string;
    deleted_date : Date;
    user_deleted : string;
    status : string;
    dongia : number;
    action : string;
}