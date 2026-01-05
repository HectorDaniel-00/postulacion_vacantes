import * as Joi from 'joi';

const isProd = process.env.NODE_ENV === 'production';

export const envValidationSchema = Joi.object({
  // App
  APP_PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  // Postgres
  DATABASE_URL: Joi.string().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),

  // Swagger
  SWAGGER_TITLE: Joi.string().required(),
  SWAGGER_DESCRIPTION: Joi.string().required().default('Sin description'),
  SWAGGER_VERSION: Joi.number().required(),

  // JWT
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES: Joi.string().required().default('15m'),
  REFRESH_SECRET: Joi.string().required(),
  REFRESH_EXPIRES: Joi.string().required().default('12h'),
});
