import Joi from "joi";

export const ANSWER_SCHEMA = Joi.object({
  questionId: Joi.number(),
  timestamp: Joi.number(),
  answer: [Joi.number(), Joi.array().items(Joi.number())],
});

export const FINISH_SCHEMA = Joi.object({
  timestamp: Joi.number(),
});

export const STATS_SCHEMA = Joi.object({
  event: Joi.string(),
  timestamp: Joi.number(),
  meta: Joi.any(),
});
