/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: orderItem.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var order_pb = require('./order_pb.js')

var sku_pb = require('./sku_pb.js')
const proto = {};
proto.proto = require('./orderItem_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.OrderItemServiceClient =
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
proto.proto.OrderItemServicePromiseClient =
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
 *   !proto.proto.OrderItemCreateRequest,
 *   !proto.proto.OrderItemCreateResponse>}
 */
const methodDescriptor_OrderItemService_Create = new grpc.web.MethodDescriptor(
  '/proto.OrderItemService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderItemCreateRequest,
  proto.proto.OrderItemCreateResponse,
  /**
   * @param {!proto.proto.OrderItemCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderItemCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderItemCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderItemCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderItemCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderItemServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderItemService/Create',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Create,
      callback);
};


/**
 * @param {!proto.proto.OrderItemCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderItemCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderItemServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderItemService/Create',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderItemUpdateRequest,
 *   !proto.proto.OrderItemUpdateResponse>}
 */
const methodDescriptor_OrderItemService_Update = new grpc.web.MethodDescriptor(
  '/proto.OrderItemService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderItemUpdateRequest,
  proto.proto.OrderItemUpdateResponse,
  /**
   * @param {!proto.proto.OrderItemUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderItemUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderItemUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderItemUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderItemUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderItemServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderItemService/Update',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Update,
      callback);
};


/**
 * @param {!proto.proto.OrderItemUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderItemUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderItemServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderItemService/Update',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderItemDeleteRequest,
 *   !proto.proto.OrderItemDeleteResponse>}
 */
const methodDescriptor_OrderItemService_Delete = new grpc.web.MethodDescriptor(
  '/proto.OrderItemService/Delete',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderItemDeleteRequest,
  proto.proto.OrderItemDeleteResponse,
  /**
   * @param {!proto.proto.OrderItemDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderItemDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderItemDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderItemDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderItemDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderItemServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderItemService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Delete,
      callback);
};


/**
 * @param {!proto.proto.OrderItemDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderItemDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderItemServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderItemService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderItemGetRequest,
 *   !proto.proto.OrderItemGetResponse>}
 */
const methodDescriptor_OrderItemService_Get = new grpc.web.MethodDescriptor(
  '/proto.OrderItemService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderItemGetRequest,
  proto.proto.OrderItemGetResponse,
  /**
   * @param {!proto.proto.OrderItemGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderItemGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderItemGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderItemGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderItemGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderItemServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderItemService/Get',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Get,
      callback);
};


/**
 * @param {!proto.proto.OrderItemGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderItemGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderItemServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderItemService/Get',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.OrderItemListRequest,
 *   !proto.proto.OrderItemListResponse>}
 */
const methodDescriptor_OrderItemService_List = new grpc.web.MethodDescriptor(
  '/proto.OrderItemService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.OrderItemListRequest,
  proto.proto.OrderItemListResponse,
  /**
   * @param {!proto.proto.OrderItemListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.OrderItemListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.OrderItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.OrderItemListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.OrderItemListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.OrderItemServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.OrderItemService/List',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_List,
      callback);
};


/**
 * @param {!proto.proto.OrderItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.OrderItemListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.OrderItemServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.OrderItemService/List',
      request,
      metadata || {},
      methodDescriptor_OrderItemService_List);
};


module.exports = proto.proto;

