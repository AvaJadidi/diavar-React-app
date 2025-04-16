import api from "configs/api";

const addCategory = (data) => api.post("category", data);
const getCategory = () => api.get("category");
const deleteCategory = (data) => api.delete(`category/${data}`, data);

export { addCategory, getCategory ,deleteCategory};
