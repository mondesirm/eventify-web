import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.API_URL;

class AnalyticVisitorsService {
    getVisitorsByVisitorId(visitorIDRequest) {
        return axios.get(`${API_URL}/visitors/` + visitorIDRequest, { headers: authHeader() });
    }

    getVisitors() {
        return axios.get(`${API_URL}/visitors`, { headers: authHeader() });
    }

    createVisitor(visitorRequest) {
        return axios.post(`${API_URL}/visitors`, visitorRequest);
    }

    deleteVisitor(id) {
        return axios.delete(`${API_URL}/visitors/${id}`, { headers: authHeader() });
    }

    updateVisitor(id, visitorRequest) {
        return axios.put(`${API_URL}/visitors/${id}`, visitorRequest, { headers: authHeader() });
    }
}

export default new AnalyticVisitorsService();
