'use strict';
const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const DEFAULT_COMMAND = `--help`;
const MAX_ID_LENGTH = 6;
const USER_ARGV_INDEX = 2;
const MAX_COMMENTS = 6;
const API_PREFIX = `/api`;

const ExitCode = {
  error: 1,
  success: 0,
};
const HttpCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};


const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};
const PictureRestrict = {
  MIN: 0,
  MAX: 15,
};
const Picture = [
  `image01.jpg`, `image02.jpg`, `image03.jpg`, `image04.jpg`, `image05.jpg`,
  `image06.jpg`, `image07.jpg`, `image08.jpg`, `image09.jpg`, `image10.jpg`,
  `image11.jpg`, `image12.jpg`, `image13.jpg`, `image14.jpg`, `image15.jpg`, `image16.jpg`];

module.exports = {
  MAX_COMMENTS,
  MAX_ID_LENGTH,
  HttpCode,
  SumRestrict,
  PictureRestrict,
  Picture,
  OfferType,
  DEFAULT_COUNT,
  FILE_NAME,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode,
  API_PREFIX
};
