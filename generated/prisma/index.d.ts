
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model horarios
 * 
 */
export type horarios = $Result.DefaultSelection<Prisma.$horariosPayload>
/**
 * Model comedero
 * 
 */
export type comedero = $Result.DefaultSelection<Prisma.$comederoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Horarios
 * const horarios = await prisma.horarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Horarios
   * const horarios = await prisma.horarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.horarios`: Exposes CRUD operations for the **horarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horarios.findMany()
    * ```
    */
  get horarios(): Prisma.horariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comedero`: Exposes CRUD operations for the **comedero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comederos
    * const comederos = await prisma.comedero.findMany()
    * ```
    */
  get comedero(): Prisma.comederoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    horarios: 'horarios',
    comedero: 'comedero'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "horarios" | "comedero"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      horarios: {
        payload: Prisma.$horariosPayload<ExtArgs>
        fields: Prisma.horariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findFirst: {
            args: Prisma.horariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findMany: {
            args: Prisma.horariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          create: {
            args: Prisma.horariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          createMany: {
            args: Prisma.horariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.horariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          update: {
            args: Prisma.horariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          deleteMany: {
            args: Prisma.horariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.horariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          aggregate: {
            args: Prisma.HorariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios>
          }
          groupBy: {
            args: Prisma.horariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.horariosCountArgs<ExtArgs>
            result: $Utils.Optional<HorariosCountAggregateOutputType> | number
          }
        }
      }
      comedero: {
        payload: Prisma.$comederoPayload<ExtArgs>
        fields: Prisma.comederoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comederoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comederoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          findFirst: {
            args: Prisma.comederoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comederoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          findMany: {
            args: Prisma.comederoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>[]
          }
          create: {
            args: Prisma.comederoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          createMany: {
            args: Prisma.comederoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comederoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          update: {
            args: Prisma.comederoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          deleteMany: {
            args: Prisma.comederoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comederoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comederoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comederoPayload>
          }
          aggregate: {
            args: Prisma.ComederoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComedero>
          }
          groupBy: {
            args: Prisma.comederoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComederoGroupByOutputType>[]
          }
          count: {
            args: Prisma.comederoCountArgs<ExtArgs>
            result: $Utils.Optional<ComederoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    horarios?: horariosOmit
    comedero?: comederoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model horarios
   */

  export type AggregateHorarios = {
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  export type HorariosAvgAggregateOutputType = {
    id: number | null
  }

  export type HorariosSumAggregateOutputType = {
    id: number | null
  }

  export type HorariosMinAggregateOutputType = {
    id: number | null
    fecha_cargada: Date | null
    descripcion: string | null
    fecha_now: Date | null
  }

  export type HorariosMaxAggregateOutputType = {
    id: number | null
    fecha_cargada: Date | null
    descripcion: string | null
    fecha_now: Date | null
  }

  export type HorariosCountAggregateOutputType = {
    id: number
    fecha_cargada: number
    descripcion: number
    fecha_now: number
    _all: number
  }


  export type HorariosAvgAggregateInputType = {
    id?: true
  }

  export type HorariosSumAggregateInputType = {
    id?: true
  }

  export type HorariosMinAggregateInputType = {
    id?: true
    fecha_cargada?: true
    descripcion?: true
    fecha_now?: true
  }

  export type HorariosMaxAggregateInputType = {
    id?: true
    fecha_cargada?: true
    descripcion?: true
    fecha_now?: true
  }

  export type HorariosCountAggregateInputType = {
    id?: true
    fecha_cargada?: true
    descripcion?: true
    fecha_now?: true
    _all?: true
  }

  export type HorariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to aggregate.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios
    **/
    _count?: true | HorariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorariosMaxAggregateInputType
  }

  export type GetHorariosAggregateType<T extends HorariosAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios[P]>
      : GetScalarType<T[P], AggregateHorarios[P]>
  }




  export type horariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horariosWhereInput
    orderBy?: horariosOrderByWithAggregationInput | horariosOrderByWithAggregationInput[]
    by: HorariosScalarFieldEnum[] | HorariosScalarFieldEnum
    having?: horariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorariosCountAggregateInputType | true
    _avg?: HorariosAvgAggregateInputType
    _sum?: HorariosSumAggregateInputType
    _min?: HorariosMinAggregateInputType
    _max?: HorariosMaxAggregateInputType
  }

  export type HorariosGroupByOutputType = {
    id: number
    fecha_cargada: Date
    descripcion: string
    fecha_now: Date
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  type GetHorariosGroupByPayload<T extends horariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorariosGroupByOutputType[P]>
            : GetScalarType<T[P], HorariosGroupByOutputType[P]>
        }
      >
    >


  export type horariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_cargada?: boolean
    descripcion?: boolean
    fecha_now?: boolean
  }, ExtArgs["result"]["horarios"]>



  export type horariosSelectScalar = {
    id?: boolean
    fecha_cargada?: boolean
    descripcion?: boolean
    fecha_now?: boolean
  }

  export type horariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_cargada" | "descripcion" | "fecha_now", ExtArgs["result"]["horarios"]>

  export type $horariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha_cargada: Date
      descripcion: string
      fecha_now: Date
    }, ExtArgs["result"]["horarios"]>
    composites: {}
  }

  type horariosGetPayload<S extends boolean | null | undefined | horariosDefaultArgs> = $Result.GetResult<Prisma.$horariosPayload, S>

  type horariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<horariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorariosCountAggregateInputType | true
    }

  export interface horariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horarios'], meta: { name: 'horarios' } }
    /**
     * Find zero or one Horarios that matches the filter.
     * @param {horariosFindUniqueArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horariosFindUniqueArgs>(args: SelectSubset<T, horariosFindUniqueArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {horariosFindUniqueOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horariosFindUniqueOrThrowArgs>(args: SelectSubset<T, horariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horariosFindFirstArgs>(args?: SelectSubset<T, horariosFindFirstArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horariosFindFirstOrThrowArgs>(args?: SelectSubset<T, horariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horarios.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horariosWithIdOnly = await prisma.horarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends horariosFindManyArgs>(args?: SelectSubset<T, horariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios.
     * @param {horariosCreateArgs} args - Arguments to create a Horarios.
     * @example
     * // Create one Horarios
     * const Horarios = await prisma.horarios.create({
     *   data: {
     *     // ... data to create a Horarios
     *   }
     * })
     * 
     */
    create<T extends horariosCreateArgs>(args: SelectSubset<T, horariosCreateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {horariosCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horariosCreateManyArgs>(args?: SelectSubset<T, horariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horarios.
     * @param {horariosDeleteArgs} args - Arguments to delete one Horarios.
     * @example
     * // Delete one Horarios
     * const Horarios = await prisma.horarios.delete({
     *   where: {
     *     // ... filter to delete one Horarios
     *   }
     * })
     * 
     */
    delete<T extends horariosDeleteArgs>(args: SelectSubset<T, horariosDeleteArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios.
     * @param {horariosUpdateArgs} args - Arguments to update one Horarios.
     * @example
     * // Update one Horarios
     * const horarios = await prisma.horarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horariosUpdateArgs>(args: SelectSubset<T, horariosUpdateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {horariosDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horariosDeleteManyArgs>(args?: SelectSubset<T, horariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horariosUpdateManyArgs>(args: SelectSubset<T, horariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horarios.
     * @param {horariosUpsertArgs} args - Arguments to update or create a Horarios.
     * @example
     * // Update or create a Horarios
     * const horarios = await prisma.horarios.upsert({
     *   create: {
     *     // ... data to create a Horarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios we want to update
     *   }
     * })
     */
    upsert<T extends horariosUpsertArgs>(args: SelectSubset<T, horariosUpsertArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horarios.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends horariosCountArgs>(
      args?: Subset<T, horariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorariosAggregateArgs>(args: Subset<T, HorariosAggregateArgs>): Prisma.PrismaPromise<GetHorariosAggregateType<T>>

    /**
     * Group by Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosGroupByArgs} args - Group by arguments.
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
      T extends horariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horariosGroupByArgs['orderBy'] }
        : { orderBy?: horariosGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, horariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horarios model
   */
  readonly fields: horariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the horarios model
   */
  interface horariosFieldRefs {
    readonly id: FieldRef<"horarios", 'Int'>
    readonly fecha_cargada: FieldRef<"horarios", 'DateTime'>
    readonly descripcion: FieldRef<"horarios", 'String'>
    readonly fecha_now: FieldRef<"horarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * horarios findUnique
   */
  export type horariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findUniqueOrThrow
   */
  export type horariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findFirst
   */
  export type horariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findFirstOrThrow
   */
  export type horariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findMany
   */
  export type horariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios create
   */
  export type horariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data needed to create a horarios.
     */
    data: XOR<horariosCreateInput, horariosUncheckedCreateInput>
  }

  /**
   * horarios createMany
   */
  export type horariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios update
   */
  export type horariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data needed to update a horarios.
     */
    data: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
    /**
     * Choose, which horarios to update.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios updateMany
   */
  export type horariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
  }

  /**
   * horarios upsert
   */
  export type horariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The filter to search for the horarios to update in case it exists.
     */
    where: horariosWhereUniqueInput
    /**
     * In case the horarios found by the `where` argument doesn't exist, create a new horarios with this data.
     */
    create: XOR<horariosCreateInput, horariosUncheckedCreateInput>
    /**
     * In case the horarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
  }

  /**
   * horarios delete
   */
  export type horariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Filter which horarios to delete.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios deleteMany
   */
  export type horariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to delete
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to delete.
     */
    limit?: number
  }

  /**
   * horarios without action
   */
  export type horariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
  }


  /**
   * Model comedero
   */

  export type AggregateComedero = {
    _count: ComederoCountAggregateOutputType | null
    _avg: ComederoAvgAggregateOutputType | null
    _sum: ComederoSumAggregateOutputType | null
    _min: ComederoMinAggregateOutputType | null
    _max: ComederoMaxAggregateOutputType | null
  }

  export type ComederoAvgAggregateOutputType = {
    id: number | null
  }

  export type ComederoSumAggregateOutputType = {
    id: number | null
  }

  export type ComederoMinAggregateOutputType = {
    id: number | null
    username: string | null
    descripcion: string | null
  }

  export type ComederoMaxAggregateOutputType = {
    id: number | null
    username: string | null
    descripcion: string | null
  }

  export type ComederoCountAggregateOutputType = {
    id: number
    username: number
    descripcion: number
    _all: number
  }


  export type ComederoAvgAggregateInputType = {
    id?: true
  }

  export type ComederoSumAggregateInputType = {
    id?: true
  }

  export type ComederoMinAggregateInputType = {
    id?: true
    username?: true
    descripcion?: true
  }

  export type ComederoMaxAggregateInputType = {
    id?: true
    username?: true
    descripcion?: true
  }

  export type ComederoCountAggregateInputType = {
    id?: true
    username?: true
    descripcion?: true
    _all?: true
  }

  export type ComederoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comedero to aggregate.
     */
    where?: comederoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comederos to fetch.
     */
    orderBy?: comederoOrderByWithRelationInput | comederoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comederoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comederos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comederos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comederos
    **/
    _count?: true | ComederoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComederoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComederoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComederoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComederoMaxAggregateInputType
  }

  export type GetComederoAggregateType<T extends ComederoAggregateArgs> = {
        [P in keyof T & keyof AggregateComedero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComedero[P]>
      : GetScalarType<T[P], AggregateComedero[P]>
  }




  export type comederoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comederoWhereInput
    orderBy?: comederoOrderByWithAggregationInput | comederoOrderByWithAggregationInput[]
    by: ComederoScalarFieldEnum[] | ComederoScalarFieldEnum
    having?: comederoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComederoCountAggregateInputType | true
    _avg?: ComederoAvgAggregateInputType
    _sum?: ComederoSumAggregateInputType
    _min?: ComederoMinAggregateInputType
    _max?: ComederoMaxAggregateInputType
  }

  export type ComederoGroupByOutputType = {
    id: number
    username: string
    descripcion: string
    _count: ComederoCountAggregateOutputType | null
    _avg: ComederoAvgAggregateOutputType | null
    _sum: ComederoSumAggregateOutputType | null
    _min: ComederoMinAggregateOutputType | null
    _max: ComederoMaxAggregateOutputType | null
  }

  type GetComederoGroupByPayload<T extends comederoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComederoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComederoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComederoGroupByOutputType[P]>
            : GetScalarType<T[P], ComederoGroupByOutputType[P]>
        }
      >
    >


  export type comederoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["comedero"]>



  export type comederoSelectScalar = {
    id?: boolean
    username?: boolean
    descripcion?: boolean
  }

  export type comederoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "descripcion", ExtArgs["result"]["comedero"]>

  export type $comederoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comedero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      descripcion: string
    }, ExtArgs["result"]["comedero"]>
    composites: {}
  }

  type comederoGetPayload<S extends boolean | null | undefined | comederoDefaultArgs> = $Result.GetResult<Prisma.$comederoPayload, S>

  type comederoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comederoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComederoCountAggregateInputType | true
    }

  export interface comederoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comedero'], meta: { name: 'comedero' } }
    /**
     * Find zero or one Comedero that matches the filter.
     * @param {comederoFindUniqueArgs} args - Arguments to find a Comedero
     * @example
     * // Get one Comedero
     * const comedero = await prisma.comedero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comederoFindUniqueArgs>(args: SelectSubset<T, comederoFindUniqueArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comedero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comederoFindUniqueOrThrowArgs} args - Arguments to find a Comedero
     * @example
     * // Get one Comedero
     * const comedero = await prisma.comedero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comederoFindUniqueOrThrowArgs>(args: SelectSubset<T, comederoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comedero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoFindFirstArgs} args - Arguments to find a Comedero
     * @example
     * // Get one Comedero
     * const comedero = await prisma.comedero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comederoFindFirstArgs>(args?: SelectSubset<T, comederoFindFirstArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comedero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoFindFirstOrThrowArgs} args - Arguments to find a Comedero
     * @example
     * // Get one Comedero
     * const comedero = await prisma.comedero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comederoFindFirstOrThrowArgs>(args?: SelectSubset<T, comederoFindFirstOrThrowArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comederos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comederos
     * const comederos = await prisma.comedero.findMany()
     * 
     * // Get first 10 Comederos
     * const comederos = await prisma.comedero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comederoWithIdOnly = await prisma.comedero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comederoFindManyArgs>(args?: SelectSubset<T, comederoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comedero.
     * @param {comederoCreateArgs} args - Arguments to create a Comedero.
     * @example
     * // Create one Comedero
     * const Comedero = await prisma.comedero.create({
     *   data: {
     *     // ... data to create a Comedero
     *   }
     * })
     * 
     */
    create<T extends comederoCreateArgs>(args: SelectSubset<T, comederoCreateArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comederos.
     * @param {comederoCreateManyArgs} args - Arguments to create many Comederos.
     * @example
     * // Create many Comederos
     * const comedero = await prisma.comedero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comederoCreateManyArgs>(args?: SelectSubset<T, comederoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comedero.
     * @param {comederoDeleteArgs} args - Arguments to delete one Comedero.
     * @example
     * // Delete one Comedero
     * const Comedero = await prisma.comedero.delete({
     *   where: {
     *     // ... filter to delete one Comedero
     *   }
     * })
     * 
     */
    delete<T extends comederoDeleteArgs>(args: SelectSubset<T, comederoDeleteArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comedero.
     * @param {comederoUpdateArgs} args - Arguments to update one Comedero.
     * @example
     * // Update one Comedero
     * const comedero = await prisma.comedero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comederoUpdateArgs>(args: SelectSubset<T, comederoUpdateArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comederos.
     * @param {comederoDeleteManyArgs} args - Arguments to filter Comederos to delete.
     * @example
     * // Delete a few Comederos
     * const { count } = await prisma.comedero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comederoDeleteManyArgs>(args?: SelectSubset<T, comederoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comederos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comederos
     * const comedero = await prisma.comedero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comederoUpdateManyArgs>(args: SelectSubset<T, comederoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comedero.
     * @param {comederoUpsertArgs} args - Arguments to update or create a Comedero.
     * @example
     * // Update or create a Comedero
     * const comedero = await prisma.comedero.upsert({
     *   create: {
     *     // ... data to create a Comedero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comedero we want to update
     *   }
     * })
     */
    upsert<T extends comederoUpsertArgs>(args: SelectSubset<T, comederoUpsertArgs<ExtArgs>>): Prisma__comederoClient<$Result.GetResult<Prisma.$comederoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comederos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoCountArgs} args - Arguments to filter Comederos to count.
     * @example
     * // Count the number of Comederos
     * const count = await prisma.comedero.count({
     *   where: {
     *     // ... the filter for the Comederos we want to count
     *   }
     * })
    **/
    count<T extends comederoCountArgs>(
      args?: Subset<T, comederoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComederoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comedero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComederoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComederoAggregateArgs>(args: Subset<T, ComederoAggregateArgs>): Prisma.PrismaPromise<GetComederoAggregateType<T>>

    /**
     * Group by Comedero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comederoGroupByArgs} args - Group by arguments.
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
      T extends comederoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comederoGroupByArgs['orderBy'] }
        : { orderBy?: comederoGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, comederoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComederoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comedero model
   */
  readonly fields: comederoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comedero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comederoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comedero model
   */
  interface comederoFieldRefs {
    readonly id: FieldRef<"comedero", 'Int'>
    readonly username: FieldRef<"comedero", 'String'>
    readonly descripcion: FieldRef<"comedero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comedero findUnique
   */
  export type comederoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter, which comedero to fetch.
     */
    where: comederoWhereUniqueInput
  }

  /**
   * comedero findUniqueOrThrow
   */
  export type comederoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter, which comedero to fetch.
     */
    where: comederoWhereUniqueInput
  }

  /**
   * comedero findFirst
   */
  export type comederoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter, which comedero to fetch.
     */
    where?: comederoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comederos to fetch.
     */
    orderBy?: comederoOrderByWithRelationInput | comederoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comederos.
     */
    cursor?: comederoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comederos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comederos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comederos.
     */
    distinct?: ComederoScalarFieldEnum | ComederoScalarFieldEnum[]
  }

  /**
   * comedero findFirstOrThrow
   */
  export type comederoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter, which comedero to fetch.
     */
    where?: comederoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comederos to fetch.
     */
    orderBy?: comederoOrderByWithRelationInput | comederoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comederos.
     */
    cursor?: comederoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comederos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comederos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comederos.
     */
    distinct?: ComederoScalarFieldEnum | ComederoScalarFieldEnum[]
  }

  /**
   * comedero findMany
   */
  export type comederoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter, which comederos to fetch.
     */
    where?: comederoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comederos to fetch.
     */
    orderBy?: comederoOrderByWithRelationInput | comederoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comederos.
     */
    cursor?: comederoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comederos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comederos.
     */
    skip?: number
    distinct?: ComederoScalarFieldEnum | ComederoScalarFieldEnum[]
  }

  /**
   * comedero create
   */
  export type comederoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * The data needed to create a comedero.
     */
    data: XOR<comederoCreateInput, comederoUncheckedCreateInput>
  }

  /**
   * comedero createMany
   */
  export type comederoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comederos.
     */
    data: comederoCreateManyInput | comederoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comedero update
   */
  export type comederoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * The data needed to update a comedero.
     */
    data: XOR<comederoUpdateInput, comederoUncheckedUpdateInput>
    /**
     * Choose, which comedero to update.
     */
    where: comederoWhereUniqueInput
  }

  /**
   * comedero updateMany
   */
  export type comederoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comederos.
     */
    data: XOR<comederoUpdateManyMutationInput, comederoUncheckedUpdateManyInput>
    /**
     * Filter which comederos to update
     */
    where?: comederoWhereInput
    /**
     * Limit how many comederos to update.
     */
    limit?: number
  }

  /**
   * comedero upsert
   */
  export type comederoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * The filter to search for the comedero to update in case it exists.
     */
    where: comederoWhereUniqueInput
    /**
     * In case the comedero found by the `where` argument doesn't exist, create a new comedero with this data.
     */
    create: XOR<comederoCreateInput, comederoUncheckedCreateInput>
    /**
     * In case the comedero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comederoUpdateInput, comederoUncheckedUpdateInput>
  }

  /**
   * comedero delete
   */
  export type comederoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
    /**
     * Filter which comedero to delete.
     */
    where: comederoWhereUniqueInput
  }

  /**
   * comedero deleteMany
   */
  export type comederoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comederos to delete
     */
    where?: comederoWhereInput
    /**
     * Limit how many comederos to delete.
     */
    limit?: number
  }

  /**
   * comedero without action
   */
  export type comederoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comedero
     */
    select?: comederoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comedero
     */
    omit?: comederoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HorariosScalarFieldEnum: {
    id: 'id',
    fecha_cargada: 'fecha_cargada',
    descripcion: 'descripcion',
    fecha_now: 'fecha_now'
  };

  export type HorariosScalarFieldEnum = (typeof HorariosScalarFieldEnum)[keyof typeof HorariosScalarFieldEnum]


  export const ComederoScalarFieldEnum: {
    id: 'id',
    username: 'username',
    descripcion: 'descripcion'
  };

  export type ComederoScalarFieldEnum = (typeof ComederoScalarFieldEnum)[keyof typeof ComederoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const horariosOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion'
  };

  export type horariosOrderByRelevanceFieldEnum = (typeof horariosOrderByRelevanceFieldEnum)[keyof typeof horariosOrderByRelevanceFieldEnum]


  export const comederoOrderByRelevanceFieldEnum: {
    username: 'username',
    descripcion: 'descripcion'
  };

  export type comederoOrderByRelevanceFieldEnum = (typeof comederoOrderByRelevanceFieldEnum)[keyof typeof comederoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type horariosWhereInput = {
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    id?: IntFilter<"horarios"> | number
    fecha_cargada?: DateTimeFilter<"horarios"> | Date | string
    descripcion?: StringFilter<"horarios"> | string
    fecha_now?: DateTimeFilter<"horarios"> | Date | string
  }

  export type horariosOrderByWithRelationInput = {
    id?: SortOrder
    fecha_cargada?: SortOrder
    descripcion?: SortOrder
    fecha_now?: SortOrder
    _relevance?: horariosOrderByRelevanceInput
  }

  export type horariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    fecha_cargada?: DateTimeFilter<"horarios"> | Date | string
    descripcion?: StringFilter<"horarios"> | string
    fecha_now?: DateTimeFilter<"horarios"> | Date | string
  }, "id">

  export type horariosOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_cargada?: SortOrder
    descripcion?: SortOrder
    fecha_now?: SortOrder
    _count?: horariosCountOrderByAggregateInput
    _avg?: horariosAvgOrderByAggregateInput
    _max?: horariosMaxOrderByAggregateInput
    _min?: horariosMinOrderByAggregateInput
    _sum?: horariosSumOrderByAggregateInput
  }

  export type horariosScalarWhereWithAggregatesInput = {
    AND?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    OR?: horariosScalarWhereWithAggregatesInput[]
    NOT?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"horarios"> | number
    fecha_cargada?: DateTimeWithAggregatesFilter<"horarios"> | Date | string
    descripcion?: StringWithAggregatesFilter<"horarios"> | string
    fecha_now?: DateTimeWithAggregatesFilter<"horarios"> | Date | string
  }

  export type comederoWhereInput = {
    AND?: comederoWhereInput | comederoWhereInput[]
    OR?: comederoWhereInput[]
    NOT?: comederoWhereInput | comederoWhereInput[]
    id?: IntFilter<"comedero"> | number
    username?: StringFilter<"comedero"> | string
    descripcion?: StringFilter<"comedero"> | string
  }

  export type comederoOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    descripcion?: SortOrder
    _relevance?: comederoOrderByRelevanceInput
  }

  export type comederoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comederoWhereInput | comederoWhereInput[]
    OR?: comederoWhereInput[]
    NOT?: comederoWhereInput | comederoWhereInput[]
    username?: StringFilter<"comedero"> | string
    descripcion?: StringFilter<"comedero"> | string
  }, "id">

  export type comederoOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    descripcion?: SortOrder
    _count?: comederoCountOrderByAggregateInput
    _avg?: comederoAvgOrderByAggregateInput
    _max?: comederoMaxOrderByAggregateInput
    _min?: comederoMinOrderByAggregateInput
    _sum?: comederoSumOrderByAggregateInput
  }

  export type comederoScalarWhereWithAggregatesInput = {
    AND?: comederoScalarWhereWithAggregatesInput | comederoScalarWhereWithAggregatesInput[]
    OR?: comederoScalarWhereWithAggregatesInput[]
    NOT?: comederoScalarWhereWithAggregatesInput | comederoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comedero"> | number
    username?: StringWithAggregatesFilter<"comedero"> | string
    descripcion?: StringWithAggregatesFilter<"comedero"> | string
  }

  export type horariosCreateInput = {
    fecha_cargada: Date | string
    descripcion: string
    fecha_now?: Date | string
  }

  export type horariosUncheckedCreateInput = {
    id?: number
    fecha_cargada: Date | string
    descripcion: string
    fecha_now?: Date | string
  }

  export type horariosUpdateInput = {
    fecha_cargada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_now?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_cargada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_now?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horariosCreateManyInput = {
    id?: number
    fecha_cargada: Date | string
    descripcion: string
    fecha_now?: Date | string
  }

  export type horariosUpdateManyMutationInput = {
    fecha_cargada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_now?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha_cargada?: DateTimeFieldUpdateOperationsInput | Date | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha_now?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comederoCreateInput = {
    username: string
    descripcion: string
  }

  export type comederoUncheckedCreateInput = {
    id?: number
    username: string
    descripcion: string
  }

  export type comederoUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type comederoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type comederoCreateManyInput = {
    id?: number
    username: string
    descripcion: string
  }

  export type comederoUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type comederoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type horariosOrderByRelevanceInput = {
    fields: horariosOrderByRelevanceFieldEnum | horariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type horariosCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_cargada?: SortOrder
    descripcion?: SortOrder
    fecha_now?: SortOrder
  }

  export type horariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type horariosMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_cargada?: SortOrder
    descripcion?: SortOrder
    fecha_now?: SortOrder
  }

  export type horariosMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_cargada?: SortOrder
    descripcion?: SortOrder
    fecha_now?: SortOrder
  }

  export type horariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type comederoOrderByRelevanceInput = {
    fields: comederoOrderByRelevanceFieldEnum | comederoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comederoCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    descripcion?: SortOrder
  }

  export type comederoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type comederoMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    descripcion?: SortOrder
  }

  export type comederoMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    descripcion?: SortOrder
  }

  export type comederoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}