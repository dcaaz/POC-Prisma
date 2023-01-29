import Joi from "joi";

export const OrderSchema = Joi.object({
    item: Joi.string().required(),
    name: Joi.string().required(),
    phonetype: Joi.number().required(),
    value: Joi.number().required(),
    referencepoint: Joi.string().required(), 
    category: Joi.number().required(),
    coupon: Joi.number()
})

export const changeOrderSchema = Joi.object({
    item: Joi.string().required(),
    value: Joi.number().required()
})