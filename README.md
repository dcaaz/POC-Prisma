# POC TypeScript - IBeachFood

> Primeiro projeto em TypeScript não poderia ser relacionado a outro assunto, se não comida. De maneira simples, atende as demandas de realizar, atualizar, finalizaer e/ou deletar pedidos

## Organização do projeto

 - Usar/configurar/instalar TypeScript (sem utilizar configurações prontas)
 - Ter ao menos um CRUD (operações de create, retrieve, update e delete)

## DOC API

1. Rota ```/order```

Descrição: criar pedido

Entrada: atrvés de um body
``` 
{
  "item": "água de coco", 
  "name": "Daniela", 
  "phoneType": 48998215536, 
  "value": 10, 
  "referencePoint": "próx a barraca de açaí"
}
```
Saída: status 201
``` 
Pedido realizado, o pagamento é feito na entrega :)
```

2. Rota ```/finalize```

Descrição: finalizar pedido

Entrada: através de uma query
``` 
id: 1
```
Saída: status 200
``` 
O valor total do pedido é 15 reais
```

3. Rota ```/change```

Descrição: alterar pedido

Entrada: através de uma query e body
``` 
id: 1

{
  "item": "milho", 
  "value": 8
}
```
Saída: status 201
``` 
O pedido feito por Daniela foi alterado
```

4. Rota ```/delete```

Descrição: cancelar pedido

Entrada: através de uma query 
``` 
id: 1
```
Saída: status 200
``` 
O pedido feito por Daniela foi cancelado
```

5. Rota ```/allOrders```

Descrição: retrospectiva da quantidade de pedidos realizados pelo mesmo usuário

Entrada: através de uma query 
``` 
phone: 48998215536
```
Saída: status 200
``` 
Sua retrospectiva é de: 10 pedidos! Oba! Peça novamente
```



