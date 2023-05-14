/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: order.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var user_pb = require('./user_pb.js')
const proto = {};
proto.proto = require('./order_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.OrderServiceClient =
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
proto.proto.OrderServicePromiseClient =
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
 *   !proto.proto.OrderCreateRequest,
 *   !proto.proto.OrderCreateResponse>}
 */
const methodDescriptor_OrderService_Create = new grpc.web.MethodDescriptor(
  '/proto.OrderService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderCreateRequest,
  proto.proto.OrderCreateResponse,
  /**
   * @param {!proto.proto.OrderCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderService/Create',
      request,
      metadata || {},
      methodDescriptor_OrderService_Create,
      callback);
};


/**
 * @param {!proto.proto.OrderCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderService/Create',
      request,
      metadata || {},
      methodDescriptor_OrderService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderGetRequest,
 *   !proto.proto.OrderGetResponse>}
 */
const methodDescriptor_OrderService_Get = new grpc.web.MethodDescriptor(
  '/proto.OrderService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderGetRequest,
  proto.proto.OrderGetResponse,
  /**
   * @param {!proto.proto.OrderGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderService/Get',
      request,
      metadata || {},
      methodDescriptor_OrderService_Get,
      callback);
};


/**
 * @param {!proto.proto.OrderGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderService/Get',
      request,
      metadata || {},
      methodDescriptor_OrderService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderListRequest,
 *   !proto.proto.OrderListResponse>}
 */
const methodDescriptor_OrderService_List = new grpc.web.MethodDescriptor(
  '/proto.OrderService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderListRequest,
  proto.proto.OrderListResponse,
  /**
   * @param {!proto.proto.OrderListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderService/List',
      request,
      metadata || {},
      methodDescriptor_OrderService_List,
      callback);
};


/**
 * @param {!proto.proto.OrderListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderService/List',
      request,
      metadata || {},
      methodDescriptor_OrderService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderUpdateRequest,
 *   !proto.proto.OrderUpdateResponse>}
 */
const methodDescriptor_OrderService_Update = new grpc.web.MethodDescriptor(
  '/proto.OrderService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderUpdateRequest,
  proto.proto.OrderUpdateResponse,
  /**
   * @param {!proto.proto.OrderUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderService/Update',
      request,
      metadata || {},
      methodDescriptor_OrderService_Update,
      callback);
};


/**
 * @param {!proto.proto.OrderUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderService/Update',
      request,
      metadata || {},
      methodDescriptor_OrderService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderDeleteRequest,
 *   !proto.proto.OrderDeleteResponse>}
 */
const methodDescriptor_OrderService_Delete = new grpc.web.MethodDescriptor(
  '/proto.OrderService/Delete',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderDeleteRequest,
  proto.proto.OrderDeleteResponse,
  /**
   * @param {!proto.proto.OrderDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrderService_Delete,
      callback);
};


/**
 * @param {!proto.proto.OrderDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrderService_Delete);
};


module.exports = proto.proto;
