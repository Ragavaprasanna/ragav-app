import { ErrorSharp } from "@mui/icons-material";
/*import {Formik} from "formik";*/
import { useFormik } from "formik";
import * as yup from "yup";

/*const validateForm = (values) => {
    console.log(validateForm,values)
    const errors = {};
    if(values.email.length < 5){
        errors.email = "Please provide a longer email";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }
    

    if(values.password.length < 8){
        errors.password = "Please provide a longer password";
    } else if(values.password.length > 12){
        errors.password = "Please provide a shorter password";

    }
    return errors;
};*/

{/*export function BasicForm() {
  return (
  <div>
      <Formik initialValues={{email:"ragav@gmail.com",password:""}}
      validate={validateForm}
      onSubmit={(values) => {
          console.log("onSubmit",values);
      }}>
          {(formik) => (
  <form onSubmit={formik.handleSubmit}> 
      <input type = "email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter your Email"/>
      {formik.errors.email && formik.touched.email && formik.errors.email}<br />
      <input type = "password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder="Enter your Password"/>
      {formik.errors.password && formik.touched.password && formik.errors.password }<br />
      <button type="submit">Sumbit</button>
  </form>
  )}
  </Formik>
  </div>
  );
}*/}

const formvalidationSchema =  yup.object({
    email:yup.string()
    .min(5,"Need a bigger email 😁").required("Why not fill this email 😒")
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"pattern did not matched 😝"),
    password:yup.string()
    .min(8,"Need a longer password 😁").max(12,"Too much password 😩").required("Why not fill this password 😒"),
});

export function BasicForm() {
    const {handleSubmit,handleChange,handleBlur,values,errors,touched}= useFormik({
        initialValues:{email:"ragav@gmail.com",password:""},
        /*validate:validateForm,*/
        validationSchema:formvalidationSchema,
        onSubmit:(values) => {
            console.log("onSubmit",values);
        },

    });

    return (
    
    <form onSubmit={handleSubmit}> 
        <input type = "email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Email"/>
        {errors.email && touched.email && errors.email}<br />
        <input type = "password" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}  placeholder="Enter your Password"/>
        {errors.password && touched.password && errors.password }<br />
        <button type="submit">Sumbit</button>
    </form>
    
    );
    }
  
