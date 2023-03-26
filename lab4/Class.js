
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    // Phương thức lấy tên đầy đủ
    getFullName() {
      return this.last_name +" "+ this.first_name;
    }
  
    // Phương thức tính số tuổi hiện tại theo năm
    getTinhTuoiTheoNam() {
        const ngaysinh = new Date(this.dob);
        const hientai =new Date ();
        const age = hientai - ngaysinh;
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365));
        
    }
  
    // Phương thức tính số tuổi hiện tại theo ngày
    getTinhTuoiTheoNgay() {
        const ngaysinh = new Date(this.dob);
        const hientai =new Date ();
        const tuoitinhbanggiay = hientai - ngaysinh;
      const age = Math.floor(tuoitinhbanggiay/ (1000 * 60 * 60 * 24));
      return age;
    }
  }
  
  // Tạo danh sách studentList
  const studentList = [
    new Student(1,'Ly','Nguyễn','WEB01','ly@gmail.com','0933928111','2004-08-12'),
    new Student(2,'An','Trần','WEB02','an@gmail.com','0936432222','1990-04-01'),
    new Student(3,'Quang','Nguyễn','WEB01','quang@gmail.com','0944321555','2000-01-01'),
    new Student(4,'Anh','Lê','WEB01','anh@gmail.com','0977543122','2003-05-04'),
    new Student(5,'Thuận','Hồ','WEB02','thuan@gmail.com','0966234664','2004-02-01')
  ];
  
  // Sắp xếp danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày
  studentList.sort((a, b) => a.getTinhTuoiTheoNgay() - b.getTinhTuoiTheoNgay());
  
  // In ra danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày
  console.log('Danh sách sinh viên theo thứ tự từ thấp đến cao theo số tuổi tính theo ngày:');
  studentList.forEach(student => console.log(`${student.getFullName()}, ${student.getTinhTuoiTheoNam()} tuổi (${student.getTinhTuoiTheoNgay()} ngày tuổi)`));
  
  // Lấy kích thước màn hình
  var rong = window.screen.width;
  var dai = window.screen.height;

 // In thông tin kích thước màn hình ra console
 console.log("Kích thước màn hình là " + rong + "x" + dai + " pixels."); 
