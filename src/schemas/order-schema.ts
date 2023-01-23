import Joi from "joi";

export const OrderSchema = Joi.object({
    item: Joi.string().required(),
    name: Joi.string().required(),
    phoneType: Joi.number().required(),
    value: Joi.number().required(),
    referencePoint: Joi.string().required()
})

export const changeOrderSchema = Joi.object({
    item: Joi.string().required(),
    value: Joi.number().required()
})