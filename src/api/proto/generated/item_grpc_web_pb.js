/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: item.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var category_pb = require('./category_pb.js')
const proto = {};
proto.proto = require('./item_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.ItemServiceClient =
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
proto.proto.ItemServicePromiseClient =
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
 *   !proto.proto.ItemCreateRequest,
 *   !proto.proto.ItemCreateResponse>}
 */
const methodDescriptor_ItemService_Create = new grpc.web.MethodDescriptor(
  '/proto.ItemService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.ItemCreateRequest,
  proto.proto.ItemCreateResponse,
  /**
   * @param {!proto.proto.ItemCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ItemCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ItemCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.ItemCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ItemCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ItemServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ItemService/Create',
      request,
      metadata || {},
      methodDescriptor_ItemService_Create,
      callback);
};


/**
 * @param {!proto.proto.ItemCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ItemCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.ItemServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ItemService/Create',
      request,
      metadata || {},
      methodDescriptor_ItemService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ItemUpdateRequest,
 *   !proto.proto.ItemUpdateResponse>}
 */
const methodDescriptor_ItemService_Update = new grpc.web.MethodDescriptor(
  '/proto.ItemService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.ItemUpdateRequest,
  proto.proto.ItemUpdateResponse,
  /**
   * @param {!proto.proto.ItemUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ItemUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ItemUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.ItemUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ItemUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ItemServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ItemService/Update',
      request,
      metadata || {},
      methodDescriptor_ItemService_Update,
      callback);
};


/**
 * @param {!proto.proto.ItemUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ItemUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.ItemServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ItemService/Update',
      request,
      metadata || {},
      methodDescriptor_ItemService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ItemDeleteRequest,
 *   !proto.proto.ItemDeleteResponse>}
 */
const methodDescriptor_ItemService_Delete = new grpc.web.MethodDescriptor(
  '/proto.ItemService/Delete',
  grpc.web.MethodType.UNARY,
  proto.proto.ItemDeleteRequest,
  proto.proto.ItemDeleteResponse,
  /**
   * @param {!proto.proto.ItemDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ItemDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ItemDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.ItemDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ItemDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ItemServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ItemService/Delete',
      request,
      metadata || {},
      methodDescriptor_ItemService_Delete,
      callback);
};


/**
 * @param {!proto.proto.ItemDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ItemDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.proto.ItemServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ItemService/Delete',
      request,
      metadata || {},
      methodDescriptor_ItemService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ItemGetRequest,
 *   !proto.proto.ItemGetResponse>}
 */
const methodDescriptor_ItemService_Get = new grpc.web.MethodDescriptor(
  '/proto.ItemService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.ItemGetRequest,
  proto.proto.ItemGetResponse,
  /**
   * @param {!proto.proto.ItemGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ItemGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ItemGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.ItemGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ItemGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ItemServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ItemService/Get',
      request,
      metadata || {},
      methodDescriptor_ItemService_Get,
      callback);
};


/**
 * @param {!proto.proto.ItemGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ItemGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.ItemServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ItemService/Get',
      request,
      metadata || {},
      methodDescriptor_ItemService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ItemListRequest,
 *   !proto.proto.ItemListResponse>}
 */
const methodDescriptor_ItemService_List = new grpc.web.MethodDescriptor(
  '/proto.ItemService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.ItemListRequest,
  proto.proto.ItemListResponse,
  /**
   * @param {!proto.proto.ItemListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.ItemListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.ItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.ItemListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.ItemListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.ItemServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.ItemService/List',
      request,
      metadata || {},
      methodDescriptor_ItemService_List,
      callback);
};


/**
 * @param {!proto.proto.ItemListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.ItemListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.ItemServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.ItemService/List',
      request,
      metadata || {},
      methodDescriptor_ItemService_List);
};


module.exports = proto.proto;

