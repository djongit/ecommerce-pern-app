const ModelOrder = require('../models/modelOrder');
const QueryOrderRequest = new ModelOrder();

module.exports = class ControllerOrder {
    async orderByUser (userId) {
        try {
            const userOrders = QueryOrderRequest.findOrderByUser(userId);
            return userOrders;
        } catch (error) {
            throw error;
        }
    }
    async orderById (id) {
        try {
            const idOrders = QueryOrderRequest.orderById(id);
            return idOrders;
        } catch(error) {
            throw error;
        }
    }
};