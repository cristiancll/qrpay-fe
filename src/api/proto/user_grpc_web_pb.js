/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.22.2
// source: user.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.UserServiceClient =
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
proto.proto.UserServicePromiseClient =
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
 *   !proto.proto.UserCreateRequest,
 *   !proto.proto.UserCreateResponse>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/proto.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.proto.UserCreateRequest,
  proto.proto.UserCreateResponse,
  /**
   * @param {!proto.proto.UserCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserCreateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.proto.UserCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserCreateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserAdminCreatedRequest,
 *   !proto.proto.UserAdminCreatedResponse>}
 */
const methodDescriptor_UserService_AdminCreated = new grpc.web.MethodDescriptor(
  '/proto.UserService/AdminCreated',
  grpc.web.MethodType.UNARY,
  proto.proto.UserAdminCreatedRequest,
  proto.proto.UserAdminCreatedResponse,
  /**
   * @param {!proto.proto.UserAdminCreatedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserAdminCreatedResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserAdminCreatedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserAdminCreatedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserAdminCreatedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.adminCreated =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/AdminCreated',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminCreated,
      callback);
};


/**
 * @param {!proto.proto.UserAdminCreatedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserAdminCreatedResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.adminCreated =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/AdminCreated',
      request,
      metadata || {},
      methodDescriptor_UserService_AdminCreated);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserUpdateRequest,
 *   !proto.proto.UserUpdateResponse>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/proto.UserService/Update',
  grpc.web.MethodType.UNARY,
  proto.proto.UserUpdateRequest,
  proto.proto.UserUpdateResponse,
  /**
   * @param {!proto.proto.UserUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.proto.UserUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserDeleteRequest,
 *   !proto.proto.UserDeleteResponse>}
 */
const methodDescriptor_UserService_Delete = new grpc.web.MethodDescriptor(
  '/proto.UserService/Delete',
  grpc.web.MethodType.UNARY,
  proto.proto.UserDeleteRequest,
  proto.proto.UserDeleteResponse,
  /**
   * @param {!proto.proto.UserDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete,
      callback);
};


/**
 * @param {!proto.proto.UserDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Delete',
      request,
      metadata || {},
      methodDescriptor_UserService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserGetRequest,
 *   !proto.proto.UserGetResponse>}
 */
const methodDescriptor_UserService_Get = new grpc.web.MethodDescriptor(
  '/proto.UserService/Get',
  grpc.web.MethodType.UNARY,
  proto.proto.UserGetRequest,
  proto.proto.UserGetResponse,
  /**
   * @param {!proto.proto.UserGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserGetResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserGetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserGetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get,
      callback);
};


/**
 * @param {!proto.proto.UserGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserGetResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Get',
      request,
      metadata || {},
      methodDescriptor_UserService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserListRequest,
 *   !proto.proto.UserListResponse>}
 */
const methodDescriptor_UserService_List = new grpc.web.MethodDescriptor(
  '/proto.UserService/List',
  grpc.web.MethodType.UNARY,
  proto.proto.UserListRequest,
  proto.proto.UserListResponse,
  /**
   * @param {!proto.proto.UserListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserListResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List,
      callback);
};


/**
 * @param {!proto.proto.UserListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserListResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/List',
      request,
      metadata || {},
      methodDescriptor_UserService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserLoginRequest,
 *   !proto.proto.UserLoginResponse>}
 */
const methodDescriptor_UserService_Login = new grpc.web.MethodDescriptor(
  '/proto.UserService/Login',
  grpc.web.MethodType.UNARY,
  proto.proto.UserLoginRequest,
  proto.proto.UserLoginResponse,
  /**
   * @param {!proto.proto.UserLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserLoginResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login,
      callback);
};


/**
 * @param {!proto.proto.UserLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserLoginResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Login',
      request,
      metadata || {},
      methodDescriptor_UserService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UserLogoutRequest,
 *   !proto.proto.UserLogoutResponse>}
 */
const methodDescriptor_UserService_Logout = new grpc.web.MethodDescriptor(
  '/proto.UserService/Logout',
  grpc.web.MethodType.UNARY,
  proto.proto.UserLogoutRequest,
  proto.proto.UserLogoutResponse,
  /**
   * @param {!proto.proto.UserLogoutRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UserLogoutResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UserLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UserLogoutResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UserLogoutResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.UserServiceClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout,
      callback);
};


/**
 * @param {!proto.proto.UserLogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UserLogoutResponse>}
 *     Promise that resolves to the response
 */
proto.proto.UserServicePromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.UserService/Logout',
      request,
      metadata || {},
      methodDescriptor_UserService_Logout);
};


module.exports = proto.proto;

