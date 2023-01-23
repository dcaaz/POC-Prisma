function finalizeTheOrder(req, res) {
    var order = req.query.order; // recebe string
    var delivery = "2";
    var total = Number(order) + Number(delivery);
    res.send("O valor total do seu pedido foi ".concat(total));
}
export { finalizeTheOrder };
