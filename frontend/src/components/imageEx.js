import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddSubject = () => {
    const history = useHistory();
    const [data, setData] = useState({
        student_full_name: "",
        Name_with_initials: "",
        date_of_addmission: "",
        class_name: "",
        course_name: "",
        date_of_birth: "",
        nic: "",
        email: "",
        address: "",
        telephone: "",
        gender: "",
        religion: "",
        nationality: "",
        gurdian_name: "",
        gurdian_contact_number: "",
        gurdian_email: "",
        gurdian_occupation: "",
        date: "",
        bank_name: "",
        branch: "",
        payment_date: "",
        image: "",
    });
    const handleChange = (name) => (e) => {
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("image", data.image);

            formData.append("student_full_name", data.student_full_name);
            formData.append("Name_with_initials", data.Name_with_initials);
            formData.append("date_of_addmission", data.date_of_addmission);
            formData.append("class_name", data.class_name);
            formData.append("course_name", data.course_name);
            formData.append("date_of_birth", data.date_of_birth);
            formData.append("nic", data.nic);
            formData.append("email", data.email);
            formData.append("address", data.address);
            formData.append("telephone", data.telephone);
            formData.append("gender", data.gender);
            formData.append("religion", data.religion);
            formData.append("nationality", data.nationality);
            formData.append("gurdian_name", data.gurdian_name);
            formData.append("gurdian_contact_number", data.gurdian_contact_number);
            formData.append("gurdian_email", data.gurdian_email);
            formData.append("gurdian_occupation", data.gurdian_occupation);
            formData.append("bank_name", data.bank_name);
            formData.append("date", data.date);
            formData.append("branch", data.branch);
            formData.append("payment_date", data.payment_date);

            const res = await fetch(`http://localhost:5000/savestdimg`, {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                setData({ student_full_name: "", Name_with_initials: "", date_of_addmission: "", class_name: "", course_name: "", date_of_birth: "", nic: "", email: "", address: "", telephone: "", gender: "", religion: "", nationality: "", gurdian_name: "", gurdian_contact_number: "", gurdian_email: "", gurdian_occupation: "", date: "", bank_name: "", branch: "", payment_date: "" });
                history.replace("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div style={{ marginTop: '20px', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
                <p class="fs-4">Student Management System</p>
                <div className="container">
                    <h1><p class="fs-1"> Student Registration Form </p></h1>
                    &nbsp;&nbsp;

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Student full Name </p></label>
                        <input className="form-control" name="student_full_name" aria-describedby="emailHelp" value={data.student_full_name} onChange={handleChange("student_full_name")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><p class="fw-bold">Name with Initials </p></label>
                        <input className="form-control" name="Name_with_initials" value={data.Name_with_initials} onChange={handleChange("Name_with_initials")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label"> <p class="fw-bold">Date of Addmission </p></label>
                        <input type="date" className="form-control" name="date_of_addmission" value={data.date_of_addmission} onChange={handleChange("date_of_addmission")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Class Name </p></label>
                        <input className="form-control" name="class_name" aria-describedby="emailHelp" value={data.class_name} onChange={handleChange("class_name")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Course Name </p></label>
                        <input className="form-control" name="course_name" aria-describedby="emailHelp" value={data.course_name} onChange={handleChange("course_name")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">Date of Birth</p></label>
                        <input className="form-control" name="date_of_birth" aria-describedby="emailHelp" value={data.date_of_birth} onChange={handleChange("date_of_birth")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"> <p class="fw-bold">NIC</p></label>
                        <input className="form-control" name="nic" aria-describedby="emailHelp" value={data.nic} onChange={handleChange("nic")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Email </p></label>
                        <input className="form-control" name="email" aria-describedby="emailHelp" value={data.email} onChange={handleChange("email")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Address</p></label>
                        <input className="form-control" name="address" aria-describedby="emailHelp" value={data.address} onChange={handleChange("address")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Telephone</p></label>
                        <input className="form-control" name="telephone" aria-describedby="emailHelp" value={data.telephone} onChange={handleChange("telephone")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gender</p></label>
                        <input className="form-control" name="gender" aria-describedby="emailHelp" value={data.gender} onChange={handleChange("gender")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Religion</p></label>
                        <input className="form-control" name="religion" aria-describedby="emailHelp" value={data.religion} onChange={handleChange("religion")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Nationality</p></label>
                        <input className="form-control" name="nationality" aria-describedby="emailHelp" value={data.nationality} onChange={handleChange("nationality")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Name</p></label>
                        <input className="form-control" name="gurdian_name" aria-describedby="emailHelp" value={data.gurdian_name} onChange={handleChange("gurdian_name")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Contact Number</p></label>
                        <input className="form-control" name="gurdian_contact_number" aria-describedby="emailHelp" value={data.gurdian_contact_number} onChange={handleChange("gurdian_contact_number")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Email </p></label>
                        <input className="form-control" name="gurdian_email" aria-describedby="emailHelp" value={data.gurdian_email} onChange={handleChange("gurdian_email")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Gurdian Occupation </p></label>
                        <input className="form-control" name="gurdian_occupation" aria-describedby="emailHelp" value={data.gurdian_occupation} onChange={handleChange("gurdian_occupation")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Date</p></label>
                        <input className="form-control" name="date" aria-describedby="emailHelp" value={data.date} onChange={handleChange("date")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Bank Name </p></label>
                        <input className="form-control" name="bank_name" aria-describedby="emailHelp" value={data.bank_name} onChange={handleChange("bank_name")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Branch </p></label>
                        <input className="form-control" name="branch" aria-describedby="emailHelp" value={data.branch} onChange={handleChange("branch")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><p class="fw-bold">Payment Date </p></label>
                        <input type="date" className="form-control" name="payment_date" aria-describedby="emailHelp" value={data.payment_date} onChange={handleChange("payment_date")} />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSubject;
