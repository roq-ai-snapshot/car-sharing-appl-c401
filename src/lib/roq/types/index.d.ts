/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model booking
 *
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>;
/**
 * Model car
 *
 */
export type car = $Result.DefaultSelection<Prisma.$carPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model maintenance
 *
 */
export type maintenance = $Result.DefaultSelection<Prisma.$maintenancePayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.booking.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.bookingDelegate<ExtArgs>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **car** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   */
  get car(): Prisma.carDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **maintenance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Maintenances
   * const maintenances = await prisma.maintenance.findMany()
   * ```
   */
  get maintenance(): Prisma.maintenanceDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    booking: 'booking';
    car: 'car';
    company: 'company';
    maintenance: 'maintenance';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'booking' | 'car' | 'company' | 'maintenance' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>;
        fields: Prisma.bookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[];
          };
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      car: {
        payload: Prisma.$carPayload<ExtArgs>;
        fields: Prisma.carFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.carFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.carFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findFirst: {
            args: Prisma.carFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.carFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findMany: {
            args: Prisma.carFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>[];
          };
          create: {
            args: Prisma.carCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          createMany: {
            args: Prisma.carCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.carDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          update: {
            args: Prisma.carUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          deleteMany: {
            args: Prisma.carDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.carUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.carUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar>;
          };
          groupBy: {
            args: Prisma.carGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarGroupByOutputType>[];
          };
          count: {
            args: Prisma.carCountArgs<ExtArgs>;
            result: $Utils.Optional<CarCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      maintenance: {
        payload: Prisma.$maintenancePayload<ExtArgs>;
        fields: Prisma.maintenanceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.maintenanceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.maintenanceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          findFirst: {
            args: Prisma.maintenanceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.maintenanceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          findMany: {
            args: Prisma.maintenanceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>[];
          };
          create: {
            args: Prisma.maintenanceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          createMany: {
            args: Prisma.maintenanceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.maintenanceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          update: {
            args: Prisma.maintenanceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          deleteMany: {
            args: Prisma.maintenanceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.maintenanceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.maintenanceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$maintenancePayload>;
          };
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMaintenance>;
          };
          groupBy: {
            args: Prisma.maintenanceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MaintenanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.maintenanceCountArgs<ExtArgs>;
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    review: number;
  };

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | BookingCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountReviewArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    booking: number;
    maintenance: number;
    review: number;
  };

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | CarCountOutputTypeCountBookingArgs;
    maintenance?: boolean | CarCountOutputTypeCountMaintenanceArgs;
    review?: boolean | CarCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountMaintenanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: maintenanceWhereInput;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    car: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CompanyCountOutputTypeCountCarArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking: number;
    review: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UserCountOutputTypeCountBookingArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: bookingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingMinAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    car_id: string | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: string | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    car_id: string | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    start_date: number;
    end_date: number;
    user_id: number;
    car_id: number;
    pickup_location: number;
    dropoff_location: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    car_id?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    car_id?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    car_id?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: string;
    start_date: Date;
    end_date: Date;
    user_id: string;
    car_id: string;
    pickup_location: string | null;
    dropoff_location: string | null;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
          : GetScalarType<T[P], BookingGroupByOutputType[P]>;
      }
    >
  >;

  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      user_id?: boolean;
      car_id?: boolean;
      pickup_location?: boolean;
      dropoff_location?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      car?: boolean | carDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      review?: boolean | booking$reviewArgs<ExtArgs>;
      _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type bookingSelectScalar = {
    id?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    user_id?: boolean;
    car_id?: boolean;
    pickup_location?: boolean;
    dropoff_location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    review?: boolean | booking$reviewArgs<ExtArgs>;
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'booking';
    objects: {
      car: Prisma.$carPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_date: Date;
        end_date: Date;
        user_id: string;
        car_id: string;
        pickup_location: string | null;
        dropoff_location: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<
    Prisma.$bookingPayload,
    S
  >;

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookingFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking']; meta: { name: 'booking' } };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Booking that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     **/
    create<T extends bookingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingCreateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Bookings.
     *     @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     *     @example
     *     // Create many Bookings
     *     const booking = await prisma.booking.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     **/
    delete<T extends bookingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     **/
    upsert<T extends bookingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>,
    ): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the booking model
     */
    readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends carDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, carDefaultArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    review<T extends booking$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, booking$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<'booking', 'String'>;
    readonly start_date: FieldRef<'booking', 'DateTime'>;
    readonly end_date: FieldRef<'booking', 'DateTime'>;
    readonly user_id: FieldRef<'booking', 'String'>;
    readonly car_id: FieldRef<'booking', 'String'>;
    readonly pickup_location: FieldRef<'booking', 'String'>;
    readonly dropoff_location: FieldRef<'booking', 'String'>;
    readonly created_at: FieldRef<'booking', 'DateTime'>;
    readonly updated_at: FieldRef<'booking', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
  };

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>;
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput;
  };

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput;
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>;
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>;
  };

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput;
  };

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput;
  };

  /**
   * booking.review
   */
  export type booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
  };

  /**
   * Model car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  export type CarAvgAggregateOutputType = {
    year: number | null;
    mileage: number | null;
  };

  export type CarSumAggregateOutputType = {
    year: number | null;
    mileage: number | null;
  };

  export type CarMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    mileage: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    mileage: number | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    year: number;
    color: number;
    mileage: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CarAvgAggregateInputType = {
    year?: true;
    mileage?: true;
  };

  export type CarSumAggregateInputType = {
    year?: true;
    mileage?: true;
  };

  export type CarMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    mileage?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    mileage?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    mileage?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car to aggregate.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cars
     **/
    _count?: true | CarCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarMaxAggregateInputType;
  };

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>;
  };

  export type carGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput;
    orderBy?: carOrderByWithAggregationInput | carOrderByWithAggregationInput[];
    by: CarScalarFieldEnum[] | CarScalarFieldEnum;
    having?: carScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
  };

  export type CarGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    year: number;
    color: string | null;
    mileage: number | null;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  type GetCarGroupByPayload<T extends carGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CarGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CarGroupByOutputType[P]>
          : GetScalarType<T[P], CarGroupByOutputType[P]>;
      }
    >
  >;

  export type carSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      year?: boolean;
      color?: boolean;
      mileage?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | car$bookingArgs<ExtArgs>;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      maintenance?: boolean | car$maintenanceArgs<ExtArgs>;
      review?: boolean | car$reviewArgs<ExtArgs>;
      _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['car']
  >;

  export type carSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    year?: boolean;
    color?: boolean;
    mileage?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type carInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | car$bookingArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    maintenance?: boolean | car$maintenanceArgs<ExtArgs>;
    review?: boolean | car$reviewArgs<ExtArgs>;
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $carPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'car';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      maintenance: Prisma.$maintenancePayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        year: number;
        color: string | null;
        mileage: number | null;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['car']
    >;
    composites: {};
  };

  type carGetPayload<S extends boolean | null | undefined | carDefaultArgs> = $Result.GetResult<Prisma.$carPayload, S>;

  type carCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    carFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CarCountAggregateInputType | true;
  };

  export interface carDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car']; meta: { name: 'car' } };
    /**
     * Find zero or one Car that matches the filter.
     * @param {carFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends carFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carFindUniqueArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Car that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {carFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends carFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends carFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends carFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     *
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends carFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Car.
     * @param {carCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     *
     **/
    create<T extends carCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carCreateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cars.
     *     @param {carCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const car = await prisma.car.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends carCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Car.
     * @param {carDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     *
     **/
    delete<T extends carDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carDeleteArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Car.
     * @param {carUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends carUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cars.
     * @param {carDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends carDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends carUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Car.
     * @param {carUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     **/
    upsert<T extends carUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carUpsertArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
     **/
    count<T extends carCountArgs>(
      args?: Subset<T, carCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarAggregateArgs>(
      args: Subset<T, CarAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarAggregateType<T>>;

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends carGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carGroupByArgs['orderBy'] }
        : { orderBy?: carGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, carGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the car model
     */
    readonly fields: carFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends car$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, car$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    maintenance<T extends car$maintenanceArgs<ExtArgs> = {}>(
      args?: Subset<T, car$maintenanceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends car$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, car$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the car model
   */
  interface carFieldRefs {
    readonly id: FieldRef<'car', 'String'>;
    readonly make: FieldRef<'car', 'String'>;
    readonly model: FieldRef<'car', 'String'>;
    readonly year: FieldRef<'car', 'Int'>;
    readonly color: FieldRef<'car', 'String'>;
    readonly mileage: FieldRef<'car', 'Int'>;
    readonly company_id: FieldRef<'car', 'String'>;
    readonly created_at: FieldRef<'car', 'DateTime'>;
    readonly updated_at: FieldRef<'car', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * car findUnique
   */
  export type carFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findUniqueOrThrow
   */
  export type carFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findFirst
   */
  export type carFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findFirstOrThrow
   */
  export type carFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findMany
   */
  export type carFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which cars to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car create
   */
  export type carCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to create a car.
     */
    data: XOR<carCreateInput, carUncheckedCreateInput>;
  };

  /**
   * car createMany
   */
  export type carCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cars.
     */
    data: carCreateManyInput | carCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * car update
   */
  export type carUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to update a car.
     */
    data: XOR<carUpdateInput, carUncheckedUpdateInput>;
    /**
     * Choose, which car to update.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car updateMany
   */
  export type carUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cars.
     */
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyInput>;
    /**
     * Filter which cars to update
     */
    where?: carWhereInput;
  };

  /**
   * car upsert
   */
  export type carUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The filter to search for the car to update in case it exists.
     */
    where: carWhereUniqueInput;
    /**
     * In case the car found by the `where` argument doesn't exist, create a new car with this data.
     */
    create: XOR<carCreateInput, carUncheckedCreateInput>;
    /**
     * In case the car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carUpdateInput, carUncheckedUpdateInput>;
  };

  /**
   * car delete
   */
  export type carDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter which car to delete.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car deleteMany
   */
  export type carDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to delete
     */
    where?: carWhereInput;
  };

  /**
   * car.booking
   */
  export type car$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * car.maintenance
   */
  export type car$maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    where?: maintenanceWhereInput;
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[];
    cursor?: maintenanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[];
  };

  /**
   * car.review
   */
  export type car$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * car without action
   */
  export type carDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    established_date: Date | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    established_date: Date | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    established_date: number;
    website: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    established_date?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    established_date?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    established_date?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    established_date: Date | null;
    website: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      established_date?: boolean;
      website?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      car?: boolean | company$carArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    established_date?: boolean;
    website?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | company$carArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      car: Prisma.$carPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        established_date: Date | null;
        website: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends company$carArgs<ExtArgs> = {}>(
      args?: Subset<T, company$carArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly established_date: FieldRef<'company', 'DateTime'>;
    readonly website: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.car
   */
  export type company$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    where?: carWhereInput;
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    cursor?: carWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null;
    _avg: MaintenanceAvgAggregateOutputType | null;
    _sum: MaintenanceSumAggregateOutputType | null;
    _min: MaintenanceMinAggregateOutputType | null;
    _max: MaintenanceMaxAggregateOutputType | null;
  };

  export type MaintenanceAvgAggregateOutputType = {
    cost: number | null;
  };

  export type MaintenanceSumAggregateOutputType = {
    cost: number | null;
  };

  export type MaintenanceMinAggregateOutputType = {
    id: string | null;
    car_id: string | null;
    maintenance_date: Date | null;
    description: string | null;
    cost: number | null;
    next_maintenance_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MaintenanceMaxAggregateOutputType = {
    id: string | null;
    car_id: string | null;
    maintenance_date: Date | null;
    description: string | null;
    cost: number | null;
    next_maintenance_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MaintenanceCountAggregateOutputType = {
    id: number;
    car_id: number;
    maintenance_date: number;
    description: number;
    cost: number;
    next_maintenance_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MaintenanceAvgAggregateInputType = {
    cost?: true;
  };

  export type MaintenanceSumAggregateInputType = {
    cost?: true;
  };

  export type MaintenanceMinAggregateInputType = {
    id?: true;
    car_id?: true;
    maintenance_date?: true;
    description?: true;
    cost?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MaintenanceMaxAggregateInputType = {
    id?: true;
    car_id?: true;
    maintenance_date?: true;
    description?: true;
    cost?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MaintenanceCountAggregateInputType = {
    id?: true;
    car_id?: true;
    maintenance_date?: true;
    description?: true;
    cost?: true;
    next_maintenance_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance to aggregate.
     */
    where?: maintenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: maintenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned maintenances
     **/
    _count?: true | MaintenanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MaintenanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MaintenanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MaintenanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MaintenanceMaxAggregateInputType;
  };

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
    [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>;
  };

  export type maintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenanceWhereInput;
    orderBy?: maintenanceOrderByWithAggregationInput | maintenanceOrderByWithAggregationInput[];
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum;
    having?: maintenanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaintenanceCountAggregateInputType | true;
    _avg?: MaintenanceAvgAggregateInputType;
    _sum?: MaintenanceSumAggregateInputType;
    _min?: MaintenanceMinAggregateInputType;
    _max?: MaintenanceMaxAggregateInputType;
  };

  export type MaintenanceGroupByOutputType = {
    id: string;
    car_id: string;
    maintenance_date: Date;
    description: string | null;
    cost: number | null;
    next_maintenance_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: MaintenanceCountAggregateOutputType | null;
    _avg: MaintenanceAvgAggregateOutputType | null;
    _sum: MaintenanceSumAggregateOutputType | null;
    _min: MaintenanceMinAggregateOutputType | null;
    _max: MaintenanceMaxAggregateOutputType | null;
  };

  type GetMaintenanceGroupByPayload<T extends maintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MaintenanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
          : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>;
      }
    >
  >;

  export type maintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        car_id?: boolean;
        maintenance_date?: boolean;
        description?: boolean;
        cost?: boolean;
        next_maintenance_date?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        car?: boolean | carDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['maintenance']
    >;

  export type maintenanceSelectScalar = {
    id?: boolean;
    car_id?: boolean;
    maintenance_date?: boolean;
    description?: boolean;
    cost?: boolean;
    next_maintenance_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type maintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>;
  };

  export type $maintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'maintenance';
    objects: {
      car: Prisma.$carPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        car_id: string;
        maintenance_date: Date;
        description: string | null;
        cost: number | null;
        next_maintenance_date: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['maintenance']
    >;
    composites: {};
  };

  type maintenanceGetPayload<S extends boolean | null | undefined | maintenanceDefaultArgs> = $Result.GetResult<
    Prisma.$maintenancePayload,
    S
  >;

  type maintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    maintenanceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MaintenanceCountAggregateInputType | true;
  };

  export interface maintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance']; meta: { name: 'maintenance' } };
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {maintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends maintenanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceFindUniqueArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<
      $Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Maintenance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {maintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends maintenanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<
      $Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends maintenanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceFindFirstArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<
      $Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends maintenanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<
      $Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     *
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const maintenanceWithIdOnly = await prisma.maintenance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends maintenanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Maintenance.
     * @param {maintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     *
     **/
    create<T extends maintenanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceCreateArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Maintenances.
     *     @param {maintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     *     @example
     *     // Create many Maintenances
     *     const maintenance = await prisma.maintenance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends maintenanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Maintenance.
     * @param {maintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     *
     **/
    delete<T extends maintenanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceDeleteArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Maintenance.
     * @param {maintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends maintenanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceUpdateArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Maintenances.
     * @param {maintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends maintenanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maintenanceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends maintenanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Maintenance.
     * @param {maintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     **/
    upsert<T extends maintenanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, maintenanceUpsertArgs<ExtArgs>>,
    ): Prisma__maintenanceClient<$Result.GetResult<Prisma.$maintenancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
     **/
    count<T extends maintenanceCountArgs>(
      args?: Subset<T, maintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MaintenanceAggregateArgs>(
      args: Subset<T, MaintenanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>;

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends maintenanceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenanceGroupByArgs['orderBy'] }
        : { orderBy?: maintenanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, maintenanceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the maintenance model
     */
    readonly fields: maintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenanceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends carDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, carDefaultArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the maintenance model
   */
  interface maintenanceFieldRefs {
    readonly id: FieldRef<'maintenance', 'String'>;
    readonly car_id: FieldRef<'maintenance', 'String'>;
    readonly maintenance_date: FieldRef<'maintenance', 'DateTime'>;
    readonly description: FieldRef<'maintenance', 'String'>;
    readonly cost: FieldRef<'maintenance', 'Int'>;
    readonly next_maintenance_date: FieldRef<'maintenance', 'DateTime'>;
    readonly created_at: FieldRef<'maintenance', 'DateTime'>;
    readonly updated_at: FieldRef<'maintenance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * maintenance findUnique
   */
  export type maintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput;
  };

  /**
   * maintenance findUniqueOrThrow
   */
  export type maintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance to fetch.
     */
    where: maintenanceWhereUniqueInput;
  };

  /**
   * maintenance findFirst
   */
  export type maintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[];
  };

  /**
   * maintenance findFirstOrThrow
   */
  export type maintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter, which maintenance to fetch.
     */
    where?: maintenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for maintenances.
     */
    cursor?: maintenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[];
  };

  /**
   * maintenance findMany
   */
  export type maintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter, which maintenances to fetch.
     */
    where?: maintenanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of maintenances to fetch.
     */
    orderBy?: maintenanceOrderByWithRelationInput | maintenanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing maintenances.
     */
    cursor?: maintenanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` maintenances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` maintenances.
     */
    skip?: number;
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[];
  };

  /**
   * maintenance create
   */
  export type maintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a maintenance.
     */
    data: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>;
  };

  /**
   * maintenance createMany
   */
  export type maintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenances.
     */
    data: maintenanceCreateManyInput | maintenanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * maintenance update
   */
  export type maintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a maintenance.
     */
    data: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>;
    /**
     * Choose, which maintenance to update.
     */
    where: maintenanceWhereUniqueInput;
  };

  /**
   * maintenance updateMany
   */
  export type maintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenances.
     */
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyInput>;
    /**
     * Filter which maintenances to update
     */
    where?: maintenanceWhereInput;
  };

  /**
   * maintenance upsert
   */
  export type maintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the maintenance to update in case it exists.
     */
    where: maintenanceWhereUniqueInput;
    /**
     * In case the maintenance found by the `where` argument doesn't exist, create a new maintenance with this data.
     */
    create: XOR<maintenanceCreateInput, maintenanceUncheckedCreateInput>;
    /**
     * In case the maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenanceUpdateInput, maintenanceUncheckedUpdateInput>;
  };

  /**
   * maintenance delete
   */
  export type maintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
    /**
     * Filter which maintenance to delete.
     */
    where: maintenanceWhereUniqueInput;
  };

  /**
   * maintenance deleteMany
   */
  export type maintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenances to delete
     */
    where?: maintenanceWhereInput;
  };

  /**
   * maintenance without action
   */
  export type maintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance
     */
    select?: maintenanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: maintenanceInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    car_id: string | null;
    booking_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    rating: number | null;
    comment: string | null;
    user_id: string | null;
    car_id: string | null;
    booking_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    rating: number;
    comment: number;
    user_id: number;
    car_id: number;
    booking_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    car_id?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    car_id?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    rating?: true;
    comment?: true;
    user_id?: true;
    car_id?: true;
    booking_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    rating: number;
    comment: string | null;
    user_id: string;
    car_id: string;
    booking_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      rating?: boolean;
      comment?: boolean;
      user_id?: boolean;
      car_id?: boolean;
      booking_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | bookingDefaultArgs<ExtArgs>;
      car?: boolean | carDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    rating?: boolean;
    comment?: boolean;
    user_id?: boolean;
    car_id?: boolean;
    booking_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | bookingDefaultArgs<ExtArgs>;
    car?: boolean | carDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>;
      car: Prisma.$carPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rating: number;
        comment: string | null;
        user_id: string;
        car_id: string;
        booking_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends bookingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bookingDefaultArgs<ExtArgs>>,
    ): Prisma__bookingClient<
      $Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    car<T extends carDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, carDefaultArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly comment: FieldRef<'review', 'String'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly car_id: FieldRef<'review', 'String'>;
    readonly booking_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking?: boolean | user$bookingArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | user$bookingArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    booking<T extends user$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$bookingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.booking
   */
  export type user$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookingInclude<ExtArgs> | null;
    where?: bookingWhereInput;
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[];
    cursor?: bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookingScalarFieldEnum: {
    id: 'id';
    start_date: 'start_date';
    end_date: 'end_date';
    user_id: 'user_id';
    car_id: 'car_id';
    pickup_location: 'pickup_location';
    dropoff_location: 'dropoff_location';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const CarScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    year: 'year';
    color: 'color';
    mileage: 'mileage';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    established_date: 'established_date';
    website: 'website';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const MaintenanceScalarFieldEnum: {
    id: 'id';
    car_id: 'car_id';
    maintenance_date: 'maintenance_date';
    description: 'description';
    cost: 'cost';
    next_maintenance_date: 'next_maintenance_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    rating: 'rating';
    comment: 'comment';
    user_id: 'user_id';
    car_id: 'car_id';
    booking_id: 'booking_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[];
    OR?: bookingWhereInput[];
    NOT?: bookingWhereInput | bookingWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_date?: DateTimeFilter<'booking'> | Date | string;
    end_date?: DateTimeFilter<'booking'> | Date | string;
    user_id?: UuidFilter<'booking'> | string;
    car_id?: UuidFilter<'booking'> | string;
    pickup_location?: StringNullableFilter<'booking'> | string | null;
    dropoff_location?: StringNullableFilter<'booking'> | string | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
    car?: XOR<CarRelationFilter, carWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    review?: ReviewListRelationFilter;
  };

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    pickup_location?: SortOrderInput | SortOrder;
    dropoff_location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car?: carOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type bookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookingWhereInput | bookingWhereInput[];
      OR?: bookingWhereInput[];
      NOT?: bookingWhereInput | bookingWhereInput[];
      start_date?: DateTimeFilter<'booking'> | Date | string;
      end_date?: DateTimeFilter<'booking'> | Date | string;
      user_id?: UuidFilter<'booking'> | string;
      car_id?: UuidFilter<'booking'> | string;
      pickup_location?: StringNullableFilter<'booking'> | string | null;
      dropoff_location?: StringNullableFilter<'booking'> | string | null;
      created_at?: DateTimeFilter<'booking'> | Date | string;
      updated_at?: DateTimeFilter<'booking'> | Date | string;
      car?: XOR<CarRelationFilter, carWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    pickup_location?: SortOrderInput | SortOrder;
    dropoff_location?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookingCountOrderByAggregateInput;
    _max?: bookingMaxOrderByAggregateInput;
    _min?: bookingMinOrderByAggregateInput;
  };

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    OR?: bookingScalarWhereWithAggregatesInput[];
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'booking'> | string;
    start_date?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'booking'> | string;
    car_id?: UuidWithAggregatesFilter<'booking'> | string;
    pickup_location?: StringNullableWithAggregatesFilter<'booking'> | string | null;
    dropoff_location?: StringNullableWithAggregatesFilter<'booking'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'booking'> | Date | string;
  };

  export type carWhereInput = {
    AND?: carWhereInput | carWhereInput[];
    OR?: carWhereInput[];
    NOT?: carWhereInput | carWhereInput[];
    id?: UuidFilter<'car'> | string;
    make?: StringFilter<'car'> | string;
    model?: StringFilter<'car'> | string;
    year?: IntFilter<'car'> | number;
    color?: StringNullableFilter<'car'> | string | null;
    mileage?: IntNullableFilter<'car'> | number | null;
    company_id?: UuidFilter<'car'> | string;
    created_at?: DateTimeFilter<'car'> | Date | string;
    updated_at?: DateTimeFilter<'car'> | Date | string;
    booking?: BookingListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    maintenance?: MaintenanceListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type carOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrderInput | SortOrder;
    mileage?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    maintenance?: maintenanceOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type carWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: carWhereInput | carWhereInput[];
      OR?: carWhereInput[];
      NOT?: carWhereInput | carWhereInput[];
      make?: StringFilter<'car'> | string;
      model?: StringFilter<'car'> | string;
      year?: IntFilter<'car'> | number;
      color?: StringNullableFilter<'car'> | string | null;
      mileage?: IntNullableFilter<'car'> | number | null;
      company_id?: UuidFilter<'car'> | string;
      created_at?: DateTimeFilter<'car'> | Date | string;
      updated_at?: DateTimeFilter<'car'> | Date | string;
      booking?: BookingListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      maintenance?: MaintenanceListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type carOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrderInput | SortOrder;
    mileage?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: carCountOrderByAggregateInput;
    _avg?: carAvgOrderByAggregateInput;
    _max?: carMaxOrderByAggregateInput;
    _min?: carMinOrderByAggregateInput;
    _sum?: carSumOrderByAggregateInput;
  };

  export type carScalarWhereWithAggregatesInput = {
    AND?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    OR?: carScalarWhereWithAggregatesInput[];
    NOT?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'car'> | string;
    make?: StringWithAggregatesFilter<'car'> | string;
    model?: StringWithAggregatesFilter<'car'> | string;
    year?: IntWithAggregatesFilter<'car'> | number;
    color?: StringNullableWithAggregatesFilter<'car'> | string | null;
    mileage?: IntNullableWithAggregatesFilter<'car'> | number | null;
    company_id?: UuidWithAggregatesFilter<'car'> | string;
    created_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    website?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    car?: CarListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    car?: carOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
      website?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      car?: CarListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    established_date?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    website?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type maintenanceWhereInput = {
    AND?: maintenanceWhereInput | maintenanceWhereInput[];
    OR?: maintenanceWhereInput[];
    NOT?: maintenanceWhereInput | maintenanceWhereInput[];
    id?: UuidFilter<'maintenance'> | string;
    car_id?: UuidFilter<'maintenance'> | string;
    maintenance_date?: DateTimeFilter<'maintenance'> | Date | string;
    description?: StringNullableFilter<'maintenance'> | string | null;
    cost?: IntNullableFilter<'maintenance'> | number | null;
    next_maintenance_date?: DateTimeNullableFilter<'maintenance'> | Date | string | null;
    created_at?: DateTimeFilter<'maintenance'> | Date | string;
    updated_at?: DateTimeFilter<'maintenance'> | Date | string;
    car?: XOR<CarRelationFilter, carWhereInput>;
  };

  export type maintenanceOrderByWithRelationInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    maintenance_date?: SortOrder;
    description?: SortOrderInput | SortOrder;
    cost?: SortOrderInput | SortOrder;
    next_maintenance_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car?: carOrderByWithRelationInput;
  };

  export type maintenanceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: maintenanceWhereInput | maintenanceWhereInput[];
      OR?: maintenanceWhereInput[];
      NOT?: maintenanceWhereInput | maintenanceWhereInput[];
      car_id?: UuidFilter<'maintenance'> | string;
      maintenance_date?: DateTimeFilter<'maintenance'> | Date | string;
      description?: StringNullableFilter<'maintenance'> | string | null;
      cost?: IntNullableFilter<'maintenance'> | number | null;
      next_maintenance_date?: DateTimeNullableFilter<'maintenance'> | Date | string | null;
      created_at?: DateTimeFilter<'maintenance'> | Date | string;
      updated_at?: DateTimeFilter<'maintenance'> | Date | string;
      car?: XOR<CarRelationFilter, carWhereInput>;
    },
    'id'
  >;

  export type maintenanceOrderByWithAggregationInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    maintenance_date?: SortOrder;
    description?: SortOrderInput | SortOrder;
    cost?: SortOrderInput | SortOrder;
    next_maintenance_date?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: maintenanceCountOrderByAggregateInput;
    _avg?: maintenanceAvgOrderByAggregateInput;
    _max?: maintenanceMaxOrderByAggregateInput;
    _min?: maintenanceMinOrderByAggregateInput;
    _sum?: maintenanceSumOrderByAggregateInput;
  };

  export type maintenanceScalarWhereWithAggregatesInput = {
    AND?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[];
    OR?: maintenanceScalarWhereWithAggregatesInput[];
    NOT?: maintenanceScalarWhereWithAggregatesInput | maintenanceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'maintenance'> | string;
    car_id?: UuidWithAggregatesFilter<'maintenance'> | string;
    maintenance_date?: DateTimeWithAggregatesFilter<'maintenance'> | Date | string;
    description?: StringNullableWithAggregatesFilter<'maintenance'> | string | null;
    cost?: IntNullableWithAggregatesFilter<'maintenance'> | number | null;
    next_maintenance_date?: DateTimeNullableWithAggregatesFilter<'maintenance'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'maintenance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'maintenance'> | Date | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringNullableFilter<'review'> | string | null;
    user_id?: UuidFilter<'review'> | string;
    car_id?: UuidFilter<'review'> | string;
    booking_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    booking?: XOR<BookingRelationFilter, bookingWhereInput>;
    car?: XOR<CarRelationFilter, carWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByWithRelationInput;
    car?: carOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      rating?: IntFilter<'review'> | number;
      comment?: StringNullableFilter<'review'> | string | null;
      user_id?: UuidFilter<'review'> | string;
      car_id?: UuidFilter<'review'> | string;
      booking_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      booking?: XOR<BookingRelationFilter, bookingWhereInput>;
      car?: XOR<CarRelationFilter, carWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    comment?: StringNullableWithAggregatesFilter<'review'> | string | null;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    car_id?: UuidWithAggregatesFilter<'review'> | string;
    booking_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    booking?: BookingListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking?: bookingOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      booking?: BookingListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bookingCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
    review?: reviewCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    car_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
    review?: reviewUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingCreateManyInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    car_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
    company: companyCreateNestedOneWithoutCarInput;
    maintenance?: maintenanceCreateNestedManyWithoutCarInput;
    review?: reviewCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutCarInput;
    review?: reviewUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
    maintenance?: maintenanceUpdateManyWithoutCarNestedInput;
    review?: reviewUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
    maintenance?: maintenanceUncheckedUpdateManyWithoutCarNestedInput;
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type carCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    established_date?: Date | string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    established_date?: Date | string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    car?: carUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    car?: carUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    established_date?: Date | string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type maintenanceCreateInput = {
    id?: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutMaintenanceInput;
  };

  export type maintenanceUncheckedCreateInput = {
    id?: string;
    car_id: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutMaintenanceNestedInput;
  };

  export type maintenanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenanceCreateManyInput = {
    id?: string;
    car_id: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking: bookingCreateNestedOneWithoutReviewInput;
    car: carCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    car_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput;
    car?: carUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    car_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type CarRelationFilter = {
    is?: carWhereInput;
    isNot?: carWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type BookingListRelationFilter = {
    every?: bookingWhereInput;
    some?: bookingWhereInput;
    none?: bookingWhereInput;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type MaintenanceListRelationFilter = {
    every?: maintenanceWhereInput;
    some?: maintenanceWhereInput;
    none?: maintenanceWhereInput;
  };

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type maintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type carCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    mileage?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carAvgOrderByAggregateInput = {
    year?: SortOrder;
    mileage?: SortOrder;
  };

  export type carMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    mileage?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    mileage?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carSumOrderByAggregateInput = {
    year?: SortOrder;
    mileage?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type CarListRelationFilter = {
    every?: carWhereInput;
    some?: carWhereInput;
    none?: carWhereInput;
  };

  export type carOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    established_date?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    established_date?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    established_date?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type maintenanceCountOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    maintenance_date?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type maintenanceAvgOrderByAggregateInput = {
    cost?: SortOrder;
  };

  export type maintenanceMaxOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    maintenance_date?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type maintenanceMinOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    maintenance_date?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    next_maintenance_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type maintenanceSumOrderByAggregateInput = {
    cost?: SortOrder;
  };

  export type BookingRelationFilter = {
    is?: bookingWhereInput;
    isNot?: bookingWhereInput;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    rating?: SortOrder;
    comment?: SortOrder;
    user_id?: SortOrder;
    car_id?: SortOrder;
    booking_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carCreateNestedOneWithoutBookingInput = {
    create?: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: carCreateOrConnectWithoutBookingInput;
    connect?: carWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBookingInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    connect?: userWhereUniqueInput;
  };

  export type reviewCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
      | reviewCreateWithoutBookingInput[]
      | reviewUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[];
    createMany?: reviewCreateManyBookingInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
      | reviewCreateWithoutBookingInput[]
      | reviewUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[];
    createMany?: reviewCreateManyBookingInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type carUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: carCreateOrConnectWithoutBookingInput;
    upsert?: carUpsertWithoutBookingInput;
    connect?: carWhereUniqueInput;
    update?: XOR<
      XOR<carUpdateToOneWithWhereWithoutBookingInput, carUpdateWithoutBookingInput>,
      carUncheckedUpdateWithoutBookingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBookingInput;
    upsert?: userUpsertWithoutBookingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBookingInput, userUpdateWithoutBookingInput>,
      userUncheckedUpdateWithoutBookingInput
    >;
  };

  export type reviewUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
      | reviewCreateWithoutBookingInput[]
      | reviewUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutBookingInput | reviewUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: reviewCreateManyBookingInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutBookingInput | reviewUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutBookingInput | reviewUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>
      | reviewCreateWithoutBookingInput[]
      | reviewUncheckedCreateWithoutBookingInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookingInput | reviewCreateOrConnectWithoutBookingInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutBookingInput | reviewUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: reviewCreateManyBookingInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutBookingInput | reviewUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutBookingInput | reviewUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bookingCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutCarInput = {
    create?: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCarInput;
    connect?: companyWhereUniqueInput;
  };

  export type maintenanceCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>
      | maintenanceCreateWithoutCarInput[]
      | maintenanceUncheckedCreateWithoutCarInput[];
    connectOrCreate?: maintenanceCreateOrConnectWithoutCarInput | maintenanceCreateOrConnectWithoutCarInput[];
    createMany?: maintenanceCreateManyCarInputEnvelope;
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
      | reviewCreateWithoutCarInput[]
      | reviewUncheckedCreateWithoutCarInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[];
    createMany?: reviewCreateManyCarInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type maintenanceUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>
      | maintenanceCreateWithoutCarInput[]
      | maintenanceUncheckedCreateWithoutCarInput[];
    connectOrCreate?: maintenanceCreateOrConnectWithoutCarInput | maintenanceCreateOrConnectWithoutCarInput[];
    createMany?: maintenanceCreateManyCarInputEnvelope;
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
      | reviewCreateWithoutCarInput[]
      | reviewUncheckedCreateWithoutCarInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[];
    createMany?: reviewCreateManyCarInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type bookingUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutCarInput | bookingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutCarInput | bookingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutCarInput | bookingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCarInput;
    upsert?: companyUpsertWithoutCarInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutCarInput, companyUpdateWithoutCarInput>,
      companyUncheckedUpdateWithoutCarInput
    >;
  };

  export type maintenanceUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>
      | maintenanceCreateWithoutCarInput[]
      | maintenanceUncheckedCreateWithoutCarInput[];
    connectOrCreate?: maintenanceCreateOrConnectWithoutCarInput | maintenanceCreateOrConnectWithoutCarInput[];
    upsert?: maintenanceUpsertWithWhereUniqueWithoutCarInput | maintenanceUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: maintenanceCreateManyCarInputEnvelope;
    set?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    disconnect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    delete?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    update?: maintenanceUpdateWithWhereUniqueWithoutCarInput | maintenanceUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: maintenanceUpdateManyWithWhereWithoutCarInput | maintenanceUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
      | reviewCreateWithoutCarInput[]
      | reviewUncheckedCreateWithoutCarInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutCarInput | reviewUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: reviewCreateManyCarInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutCarInput | reviewUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutCarInput | reviewUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>
      | bookingCreateWithoutCarInput[]
      | bookingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutCarInput | bookingCreateOrConnectWithoutCarInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutCarInput | bookingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: bookingCreateManyCarInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutCarInput | bookingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutCarInput | bookingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type maintenanceUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>
      | maintenanceCreateWithoutCarInput[]
      | maintenanceUncheckedCreateWithoutCarInput[];
    connectOrCreate?: maintenanceCreateOrConnectWithoutCarInput | maintenanceCreateOrConnectWithoutCarInput[];
    upsert?: maintenanceUpsertWithWhereUniqueWithoutCarInput | maintenanceUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: maintenanceCreateManyCarInputEnvelope;
    set?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    disconnect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    delete?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    connect?: maintenanceWhereUniqueInput | maintenanceWhereUniqueInput[];
    update?: maintenanceUpdateWithWhereUniqueWithoutCarInput | maintenanceUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: maintenanceUpdateManyWithWhereWithoutCarInput | maintenanceUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
      | reviewCreateWithoutCarInput[]
      | reviewUncheckedCreateWithoutCarInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutCarInput | reviewUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: reviewCreateManyCarInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutCarInput | reviewUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutCarInput | reviewUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type carCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
  };

  export type carUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type carUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    upsert?: carUpsertWithWhereUniqueWithoutCompanyInput | carUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    set?: carWhereUniqueInput | carWhereUniqueInput[];
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[];
    delete?: carWhereUniqueInput | carWhereUniqueInput[];
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
    update?: carUpdateWithWhereUniqueWithoutCompanyInput | carUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: carUpdateManyWithWhereWithoutCompanyInput | carUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: carScalarWhereInput | carScalarWhereInput[];
  };

  export type carUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>
      | carCreateWithoutCompanyInput[]
      | carUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: carCreateOrConnectWithoutCompanyInput | carCreateOrConnectWithoutCompanyInput[];
    upsert?: carUpsertWithWhereUniqueWithoutCompanyInput | carUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: carCreateManyCompanyInputEnvelope;
    set?: carWhereUniqueInput | carWhereUniqueInput[];
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[];
    delete?: carWhereUniqueInput | carWhereUniqueInput[];
    connect?: carWhereUniqueInput | carWhereUniqueInput[];
    update?: carUpdateWithWhereUniqueWithoutCompanyInput | carUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: carUpdateManyWithWhereWithoutCompanyInput | carUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: carScalarWhereInput | carScalarWhereInput[];
  };

  export type carCreateNestedOneWithoutMaintenanceInput = {
    create?: XOR<carCreateWithoutMaintenanceInput, carUncheckedCreateWithoutMaintenanceInput>;
    connectOrCreate?: carCreateOrConnectWithoutMaintenanceInput;
    connect?: carWhereUniqueInput;
  };

  export type carUpdateOneRequiredWithoutMaintenanceNestedInput = {
    create?: XOR<carCreateWithoutMaintenanceInput, carUncheckedCreateWithoutMaintenanceInput>;
    connectOrCreate?: carCreateOrConnectWithoutMaintenanceInput;
    upsert?: carUpsertWithoutMaintenanceInput;
    connect?: carWhereUniqueInput;
    update?: XOR<
      XOR<carUpdateToOneWithWhereWithoutMaintenanceInput, carUpdateWithoutMaintenanceInput>,
      carUncheckedUpdateWithoutMaintenanceInput
    >;
  };

  export type bookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput;
    connect?: bookingWhereUniqueInput;
  };

  export type carCreateNestedOneWithoutReviewInput = {
    create?: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: carCreateOrConnectWithoutReviewInput;
    connect?: carWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type bookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: bookingCreateOrConnectWithoutReviewInput;
    upsert?: bookingUpsertWithoutReviewInput;
    connect?: bookingWhereUniqueInput;
    update?: XOR<
      XOR<bookingUpdateToOneWithWhereWithoutReviewInput, bookingUpdateWithoutReviewInput>,
      bookingUncheckedUpdateWithoutReviewInput
    >;
  };

  export type carUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: carCreateOrConnectWithoutReviewInput;
    upsert?: carUpsertWithoutReviewInput;
    connect?: carWhereUniqueInput;
    update?: XOR<
      XOR<carUpdateToOneWithWhereWithoutReviewInput, carUpdateWithoutReviewInput>,
      carUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type bookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
      | bookingCreateWithoutUserInput[]
      | bookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[];
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: bookingCreateManyUserInputEnvelope;
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[];
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type carCreateWithoutBookingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCarInput;
    maintenance?: maintenanceCreateNestedManyWithoutCarInput;
    review?: reviewCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateWithoutBookingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutCarInput;
    review?: reviewUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carCreateOrConnectWithoutBookingInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
  };

  export type userCreateWithoutBookingInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBookingInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBookingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
  };

  export type reviewCreateWithoutBookingInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutBookingInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutBookingInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>;
  };

  export type reviewCreateManyBookingInputEnvelope = {
    data: reviewCreateManyBookingInput | reviewCreateManyBookingInput[];
    skipDuplicates?: boolean;
  };

  export type carUpsertWithoutBookingInput = {
    update: XOR<carUpdateWithoutBookingInput, carUncheckedUpdateWithoutBookingInput>;
    create: XOR<carCreateWithoutBookingInput, carUncheckedCreateWithoutBookingInput>;
    where?: carWhereInput;
  };

  export type carUpdateToOneWithWhereWithoutBookingInput = {
    where?: carWhereInput;
    data: XOR<carUpdateWithoutBookingInput, carUncheckedUpdateWithoutBookingInput>;
  };

  export type carUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
    maintenance?: maintenanceUpdateManyWithoutCarNestedInput;
    review?: reviewUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    maintenance?: maintenanceUncheckedUpdateManyWithoutCarNestedInput;
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type userUpsertWithoutBookingInput = {
    update: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
    create: XOR<userCreateWithoutBookingInput, userUncheckedCreateWithoutBookingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBookingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBookingInput, userUncheckedUpdateWithoutBookingInput>;
  };

  export type userUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type reviewUpsertWithWhereUniqueWithoutBookingInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>;
    create: XOR<reviewCreateWithoutBookingInput, reviewUncheckedCreateWithoutBookingInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutBookingInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutBookingInput, reviewUncheckedUpdateWithoutBookingInput>;
  };

  export type reviewUpdateManyWithWhereWithoutBookingInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutBookingInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    comment?: StringNullableFilter<'review'> | string | null;
    user_id?: UuidFilter<'review'> | string;
    car_id?: UuidFilter<'review'> | string;
    booking_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type bookingCreateWithoutCarInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBookingInput;
    review?: reviewCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutCarInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutCarInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>;
  };

  export type bookingCreateManyCarInputEnvelope = {
    data: bookingCreateManyCarInput | bookingCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutCarInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    established_date?: Date | string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutCarInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    established_date?: Date | string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutCarInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
  };

  export type maintenanceCreateWithoutCarInput = {
    id?: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenanceUncheckedCreateWithoutCarInput = {
    id?: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenanceCreateOrConnectWithoutCarInput = {
    where: maintenanceWhereUniqueInput;
    create: XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>;
  };

  export type maintenanceCreateManyCarInputEnvelope = {
    data: maintenanceCreateManyCarInput | maintenanceCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutCarInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking: bookingCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutCarInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutCarInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>;
  };

  export type reviewCreateManyCarInputEnvelope = {
    data: reviewCreateManyCarInput | reviewCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutCarInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutCarInput, bookingUncheckedUpdateWithoutCarInput>;
    create: XOR<bookingCreateWithoutCarInput, bookingUncheckedCreateWithoutCarInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutCarInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutCarInput, bookingUncheckedUpdateWithoutCarInput>;
  };

  export type bookingUpdateManyWithWhereWithoutCarInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutCarInput>;
  };

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[];
    OR?: bookingScalarWhereInput[];
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[];
    id?: UuidFilter<'booking'> | string;
    start_date?: DateTimeFilter<'booking'> | Date | string;
    end_date?: DateTimeFilter<'booking'> | Date | string;
    user_id?: UuidFilter<'booking'> | string;
    car_id?: UuidFilter<'booking'> | string;
    pickup_location?: StringNullableFilter<'booking'> | string | null;
    dropoff_location?: StringNullableFilter<'booking'> | string | null;
    created_at?: DateTimeFilter<'booking'> | Date | string;
    updated_at?: DateTimeFilter<'booking'> | Date | string;
  };

  export type companyUpsertWithoutCarInput = {
    update: XOR<companyUpdateWithoutCarInput, companyUncheckedUpdateWithoutCarInput>;
    create: XOR<companyCreateWithoutCarInput, companyUncheckedCreateWithoutCarInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutCarInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutCarInput, companyUncheckedUpdateWithoutCarInput>;
  };

  export type companyUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type maintenanceUpsertWithWhereUniqueWithoutCarInput = {
    where: maintenanceWhereUniqueInput;
    update: XOR<maintenanceUpdateWithoutCarInput, maintenanceUncheckedUpdateWithoutCarInput>;
    create: XOR<maintenanceCreateWithoutCarInput, maintenanceUncheckedCreateWithoutCarInput>;
  };

  export type maintenanceUpdateWithWhereUniqueWithoutCarInput = {
    where: maintenanceWhereUniqueInput;
    data: XOR<maintenanceUpdateWithoutCarInput, maintenanceUncheckedUpdateWithoutCarInput>;
  };

  export type maintenanceUpdateManyWithWhereWithoutCarInput = {
    where: maintenanceScalarWhereInput;
    data: XOR<maintenanceUpdateManyMutationInput, maintenanceUncheckedUpdateManyWithoutCarInput>;
  };

  export type maintenanceScalarWhereInput = {
    AND?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[];
    OR?: maintenanceScalarWhereInput[];
    NOT?: maintenanceScalarWhereInput | maintenanceScalarWhereInput[];
    id?: UuidFilter<'maintenance'> | string;
    car_id?: UuidFilter<'maintenance'> | string;
    maintenance_date?: DateTimeFilter<'maintenance'> | Date | string;
    description?: StringNullableFilter<'maintenance'> | string | null;
    cost?: IntNullableFilter<'maintenance'> | number | null;
    next_maintenance_date?: DateTimeNullableFilter<'maintenance'> | Date | string | null;
    created_at?: DateTimeFilter<'maintenance'> | Date | string;
    updated_at?: DateTimeFilter<'maintenance'> | Date | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutCarInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutCarInput, reviewUncheckedUpdateWithoutCarInput>;
    create: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutCarInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutCarInput, reviewUncheckedUpdateWithoutCarInput>;
  };

  export type reviewUpdateManyWithWhereWithoutCarInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCarInput>;
  };

  export type carCreateWithoutCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
    maintenance?: maintenanceCreateNestedManyWithoutCarInput;
    review?: reviewCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateWithoutCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutCarInput;
    review?: reviewUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carCreateOrConnectWithoutCompanyInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>;
  };

  export type carCreateManyCompanyInputEnvelope = {
    data: carCreateManyCompanyInput | carCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type carUpsertWithWhereUniqueWithoutCompanyInput = {
    where: carWhereUniqueInput;
    update: XOR<carUpdateWithoutCompanyInput, carUncheckedUpdateWithoutCompanyInput>;
    create: XOR<carCreateWithoutCompanyInput, carUncheckedCreateWithoutCompanyInput>;
  };

  export type carUpdateWithWhereUniqueWithoutCompanyInput = {
    where: carWhereUniqueInput;
    data: XOR<carUpdateWithoutCompanyInput, carUncheckedUpdateWithoutCompanyInput>;
  };

  export type carUpdateManyWithWhereWithoutCompanyInput = {
    where: carScalarWhereInput;
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type carScalarWhereInput = {
    AND?: carScalarWhereInput | carScalarWhereInput[];
    OR?: carScalarWhereInput[];
    NOT?: carScalarWhereInput | carScalarWhereInput[];
    id?: UuidFilter<'car'> | string;
    make?: StringFilter<'car'> | string;
    model?: StringFilter<'car'> | string;
    year?: IntFilter<'car'> | number;
    color?: StringNullableFilter<'car'> | string | null;
    mileage?: IntNullableFilter<'car'> | number | null;
    company_id?: UuidFilter<'car'> | string;
    created_at?: DateTimeFilter<'car'> | Date | string;
    updated_at?: DateTimeFilter<'car'> | Date | string;
  };

  export type carCreateWithoutMaintenanceInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
    company: companyCreateNestedOneWithoutCarInput;
    review?: reviewCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateWithoutMaintenanceInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
    review?: reviewUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carCreateOrConnectWithoutMaintenanceInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutMaintenanceInput, carUncheckedCreateWithoutMaintenanceInput>;
  };

  export type carUpsertWithoutMaintenanceInput = {
    update: XOR<carUpdateWithoutMaintenanceInput, carUncheckedUpdateWithoutMaintenanceInput>;
    create: XOR<carCreateWithoutMaintenanceInput, carUncheckedCreateWithoutMaintenanceInput>;
    where?: carWhereInput;
  };

  export type carUpdateToOneWithWhereWithoutMaintenanceInput = {
    where?: carWhereInput;
    data: XOR<carUpdateWithoutMaintenanceInput, carUncheckedUpdateWithoutMaintenanceInput>;
  };

  export type carUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
    review?: reviewUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutMaintenanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type bookingCreateWithoutReviewInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutBookingInput;
    user: userCreateNestedOneWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutReviewInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    car_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingCreateOrConnectWithoutReviewInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>;
  };

  export type carCreateWithoutReviewInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutCarInput;
    company: companyCreateNestedOneWithoutCarInput;
    maintenance?: maintenanceCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateWithoutReviewInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutCarInput;
    maintenance?: maintenanceUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carCreateOrConnectWithoutReviewInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type bookingUpsertWithoutReviewInput = {
    update: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>;
    create: XOR<bookingCreateWithoutReviewInput, bookingUncheckedCreateWithoutReviewInput>;
    where?: bookingWhereInput;
  };

  export type bookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookingWhereInput;
    data: XOR<bookingUpdateWithoutReviewInput, bookingUncheckedUpdateWithoutReviewInput>;
  };

  export type bookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutBookingNestedInput;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carUpsertWithoutReviewInput = {
    update: XOR<carUpdateWithoutReviewInput, carUncheckedUpdateWithoutReviewInput>;
    create: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>;
    where?: carWhereInput;
  };

  export type carUpdateToOneWithWhereWithoutReviewInput = {
    where?: carWhereInput;
    data: XOR<carUpdateWithoutReviewInput, carUncheckedUpdateWithoutReviewInput>;
  };

  export type carUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
    company?: companyUpdateOneRequiredWithoutCarNestedInput;
    maintenance?: maintenanceUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
    maintenance?: maintenanceUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookingCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutBookingInput;
    review?: reviewCreateNestedManyWithoutBookingInput;
  };

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    car_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking: bookingCreateNestedOneWithoutReviewInput;
    car: carCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    car_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>;
  };

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput;
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>;
  };

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput;
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type reviewCreateManyBookingInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    car_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyCarInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    user_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type maintenanceCreateManyCarInput = {
    id?: string;
    maintenance_date: Date | string;
    description?: string | null;
    cost?: number | null;
    next_maintenance_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyCarInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    user_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBookingNestedInput;
    review?: reviewUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenanceUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenanceUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type maintenanceUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    maintenance_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: NullableIntFieldUpdateOperationsInput | number | null;
    next_maintenance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carCreateManyCompanyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color?: string | null;
    mileage?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateManyWithoutCarNestedInput;
    maintenance?: maintenanceUpdateManyWithoutCarNestedInput;
    review?: reviewUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUncheckedUpdateManyWithoutCarNestedInput;
    maintenance?: maintenanceUncheckedUpdateManyWithoutCarNestedInput;
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: NullableStringFieldUpdateOperationsInput | string | null;
    mileage?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookingCreateManyUserInput = {
    id?: string;
    start_date: Date | string;
    end_date: Date | string;
    car_id: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    rating: number;
    comment?: string | null;
    car_id: string;
    booking_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutBookingNestedInput;
    review?: reviewUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    pickup_location?: NullableStringFieldUpdateOperationsInput | string | null;
    dropoff_location?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: bookingUpdateOneRequiredWithoutReviewNestedInput;
    car?: carUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    car_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    comment?: NullableStringFieldUpdateOperationsInput | string | null;
    car_id?: StringFieldUpdateOperationsInput | string;
    booking_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BookingCountOutputTypeDefaultArgs instead
   */
  export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BookingCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CarCountOutputTypeDefaultArgs instead
   */
  export type CarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CarCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookingDefaultArgs instead
   */
  export type bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    bookingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use carDefaultArgs instead
   */
  export type carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = carDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use maintenanceDefaultArgs instead
   */
  export type maintenanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    maintenanceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
