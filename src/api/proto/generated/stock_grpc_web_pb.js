/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: stock.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var sku_pb = require('./sku_pb.js')
const proto = {};
proto.proto = require('./stock_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.StockServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.StockServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.StockCreateRequest,
 *   !proto.proto.StockCreateResponse>}
 */
const methodDescriptor_StockService_Create = new grpc.web.MethodDescriptor(
  '/proto.StockService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.StockCreateRequest,
  proto.proto.StockCreateResponse,
  /**
   * @param {!proto.proto.StockCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.StockCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.StockCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.StockCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.StockCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StockServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StockService/Create',
      request,
      metadata || {},
      methodDescriptor_StockService_Create,
      callback);
};


/**
 * @param {!proto.proto.StockCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.StockCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.StockServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StockService/Create',
      request,
      metadata || {},
      methodDescriptor_StockService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.StockUpdateRequest,
 *   !proto.proto.StockUpdateResponse>}
 */
const methodDescriptor_StockService_Update = new grpc.web.MethodDescriptor(
  '/proto.StockService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.StockUpdateRequest,
  proto.proto.StockUpdateResponse,
  /**
   * @param {!proto.proto.StockUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.StockUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.StockUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.StockUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.StockUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StockServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StockService/Update',
      request,
      metadata || {},
      methodDescriptor_StockService_Update,
      callback);
};


/**
 * @param {!proto.proto.StockUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.StockUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.StockServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StockService/Update',
      request,
      metadata || {},
      methodDescriptor_StockService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.StockGetRequest,
 *   !proto.proto.StockGetResponse>}
 */
const methodDescriptor_StockService_Get = new grpc.web.MethodDescriptor(
  '/proto.StockService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.StockGetRequest,
  proto.proto.StockGetResponse,
  /**
   * @param {!proto.proto.StockGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.StockGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.StockGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.StockGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.StockGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StockServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StockService/Get',
      request,
      metadata || {},
      methodDescriptor_StockService_Get,
      callback);
};


/**
 * @param {!proto.proto.StockGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.StockGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.StockServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StockService/Get',
      request,
      metadata || {},
      methodDescriptor_StockService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.StockListRequest,
 *   !proto.proto.StockListResponse>}
 */
const methodDescriptor_StockService_List = new grpc.web.MethodDescriptor(
  '/proto.StockService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.StockListRequest,
  proto.proto.StockListResponse,
  /**
   * @param {!proto.proto.StockListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.StockListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.StockListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.StockListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.StockListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.StockServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.StockService/List',
      request,
      metadata || {},
      methodDescriptor_StockService_List,
      callback);
};


/**
 * @param {!proto.proto.StockListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.StockListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.StockServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.StockService/List',
      request,
      metadata || {},
      methodDescriptor_StockService_List);
};


module.exports = proto.proto;

