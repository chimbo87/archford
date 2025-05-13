import React from "react";
import DepartmentList from "../../components/departments/DepartmentList";
import DepartmentStaff from "../../components/departments/DepartmentStaff";
import DepartmentServices from "../../components/departments/DepartmentServices";
import "./Departments.css";
import DepartmentEquipment from "../../components/departments/DepartmentEquipment";
import DepartmentConditions from "../../components/departments/DepartmentConditions";
import DepartmentContact from "../../components/departments/DepartmentContact";

function Departments() {
  return (
    <div id="theDepartmentBox">
      <DepartmentList />
      <DepartmentStaff />
      <DepartmentServices />
      <DepartmentEquipment />
      <DepartmentConditions />
      <DepartmentContact/>
    </div>
  );
}

export default Departments;
