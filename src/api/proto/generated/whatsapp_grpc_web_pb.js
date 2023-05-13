/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: whatsapp.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./whatsapp_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.WhatsAppServiceClient =
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
proto.proto.WhatsAppServicePromiseClient =
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
 *   !proto.proto.WhatsAppGetRequest,
 *   !proto.proto.WhatsAppGetResponse>}
 */
const methodDescriptor_WhatsAppService_Get = new grpc.web.MethodDescriptor(
  '/proto.WhatsAppService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.WhatsAppGetRequest,
  proto.proto.WhatsAppGetResponse,
  /**
   * @param {!proto.proto.WhatsAppGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.WhatsAppGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.WhatsAppGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.WhatsAppGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.WhatsAppGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WhatsAppServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WhatsAppService/Get',
      request,
      metadata || {},
      methodDescriptor_WhatsAppService_Get,
      callback);
};


/**
 * @param {!proto.proto.WhatsAppGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.WhatsAppGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.WhatsAppServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WhatsAppService/Get',
      request,
      metadata || {},
      methodDescriptor_WhatsAppService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.VoidRequest,
 *   !proto.proto.WhatsAppListResponse>}
 */
const methodDescriptor_WhatsAppService_List = new grpc.web.MethodDescriptor(
  '/proto.WhatsAppService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.VoidRequest,
  proto.proto.WhatsAppListResponse,
  /**
   * @param {!proto.proto.VoidRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.WhatsAppListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.VoidRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.WhatsAppListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.WhatsAppListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.WhatsAppServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.WhatsAppService/List',
      request,
      metadata || {},
      methodDescriptor_WhatsAppService_List,
      callback);
};


/**
 * @param {!proto.proto.VoidRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.WhatsAppListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.WhatsAppServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.WhatsAppService/List',
      request,
      metadata || {},
      methodDescriptor_WhatsAppService_List);
};


module.exports = proto.proto;

