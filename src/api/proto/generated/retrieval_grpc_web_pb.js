/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: retrieval.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var user_pb = require('./user_pb.js')

var sale_pb = require('./sale_pb.js')
const proto = {};
proto.proto = require('./retrieval_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.RetrievalServiceClient =
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
proto.proto.RetrievalServicePromiseClient =
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
 *   !proto.proto.RetrievalCreateRequest,
 *   !proto.proto.RetrievalCreateResponse>}
 */
const methodDescriptor_RetrievalService_Create = new grpc.web.MethodDescriptor(
  '/proto.RetrievalService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.RetrievalCreateRequest,
  proto.proto.RetrievalCreateResponse,
  /**
   * @param {!proto.proto.RetrievalCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RetrievalCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RetrievalCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RetrievalCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RetrievalCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RetrievalServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RetrievalService/Create',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Create,
      callback);
};


/**
 * @param {!proto.proto.RetrievalCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RetrievalCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RetrievalServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RetrievalService/Create',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RetrievalGetRequest,
 *   !proto.proto.RetrievalGetResponse>}
 */
const methodDescriptor_RetrievalService_Get = new grpc.web.MethodDescriptor(
  '/proto.RetrievalService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.RetrievalGetRequest,
  proto.proto.RetrievalGetResponse,
  /**
   * @param {!proto.proto.RetrievalGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RetrievalGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RetrievalGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RetrievalGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RetrievalGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RetrievalServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RetrievalService/Get',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Get,
      callback);
};


/**
 * @param {!proto.proto.RetrievalGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RetrievalGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RetrievalServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RetrievalService/Get',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RetrievalListRequest,
 *   !proto.proto.RetrievalListResponse>}
 */
const methodDescriptor_RetrievalService_List = new grpc.web.MethodDescriptor(
  '/proto.RetrievalService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.RetrievalListRequest,
  proto.proto.RetrievalListResponse,
  /**
   * @param {!proto.proto.RetrievalListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RetrievalListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RetrievalListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RetrievalListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RetrievalListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RetrievalServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RetrievalService/List',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_List,
      callback);
};


/**
 * @param {!proto.proto.RetrievalListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RetrievalListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RetrievalServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RetrievalService/List',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RetrievalUpdateRequest,
 *   !proto.proto.RetrievalUpdateResponse>}
 */
const methodDescriptor_RetrievalService_Update = new grpc.web.MethodDescriptor(
  '/proto.RetrievalService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.RetrievalUpdateRequest,
  proto.proto.RetrievalUpdateResponse,
  /**
   * @param {!proto.proto.RetrievalUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RetrievalUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RetrievalUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RetrievalUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RetrievalUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RetrievalServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RetrievalService/Update',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Update,
      callback);
};


/**
 * @param {!proto.proto.RetrievalUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RetrievalUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RetrievalServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RetrievalService/Update',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.RetrievalDeleteRequest,
 *   !proto.proto.RetrievalDeleteResponse>}
 */
const methodDescriptor_RetrievalService_Delete = new grpc.web.MethodDescriptor(
  '/proto.RetrievalService/Delete',
  grpc.web.MethodType.UNARY,
  proto.proto.RetrievalDeleteRequest,
  proto.proto.RetrievalDeleteResponse,
  /**
   * @param {!proto.proto.RetrievalDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.RetrievalDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.proto.RetrievalDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.RetrievalDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.RetrievalDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.RetrievalServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.RetrievalService/Delete',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Delete,
      callback);
};


/**
 * @param {!proto.proto.RetrievalDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.RetrievalDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.proto.RetrievalServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.RetrievalService/Delete',
      request,
      metadata || {},
      methodDescriptor_RetrievalService_Delete);
};


module.exports = proto.proto;

