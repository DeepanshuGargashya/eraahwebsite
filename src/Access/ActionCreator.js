import axios from "axios";
import { APIS } from "./api_factory";

export const GetAllTeachers = (callBack, error) => {
    axios
      .get(APIS.GET_ALL_TEACHERS)
      .then((res) => {
        callBack(res);
      })
      .catch((e) => {
       callBack(e?.response?.data)
      });
  };
export const GetTeacherData = (id,callBack, error) => {
    axios
      .get(APIS.GET_TEACHER_DATA + id)
      .then((res) => {
        callBack(res);
      })
      .catch((e) => {
       callBack(e?.response?.data)
      });
  };
export const ContactForm = (data,callBack, error) => {
    axios
      .post(APIS.CONTACT_FORM ,data)
      .then((res) => {
        callBack(res);
      })
      .catch((e) => {
       callBack(e)
      });
  };

export const getGalleryImages = (data,callBack, error) => {
    axios
      .post(APIS.GALLERY_IMAGES ,data)
      .then((res) => {
        callBack(res);
      })
      .catch((e) => {
       callBack(e)
      });
  };
export const getBlogs = (callBack, error) => {
    axios
      .get(APIS.BLOGS)
      .then((res) => {
        callBack(res);
      })
      .catch((e) => {
       callBack(e)
      });
  };