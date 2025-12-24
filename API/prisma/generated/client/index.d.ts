
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Formulaire
 * 
 */
export type Formulaire = $Result.DefaultSelection<Prisma.$FormulairePayload>
/**
 * Model Galerie
 * 
 */
export type Galerie = $Result.DefaultSelection<Prisma.$GaleriePayload>
/**
 * Model Input
 * 
 */
export type Input = $Result.DefaultSelection<Prisma.$InputPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model Soumission
 * 
 */
export type Soumission = $Result.DefaultSelection<Prisma.$SoumissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EnumRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type EnumRole = (typeof EnumRole)[keyof typeof EnumRole]

}

export type EnumRole = $Enums.EnumRole

export const EnumRole: typeof $Enums.EnumRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formulaire`: Exposes CRUD operations for the **Formulaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formulaires
    * const formulaires = await prisma.formulaire.findMany()
    * ```
    */
  get formulaire(): Prisma.FormulaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galerie`: Exposes CRUD operations for the **Galerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeries
    * const galeries = await prisma.galerie.findMany()
    * ```
    */
  get galerie(): Prisma.GalerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.input`: Exposes CRUD operations for the **Input** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inputs
    * const inputs = await prisma.input.findMany()
    * ```
    */
  get input(): Prisma.InputDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soumission`: Exposes CRUD operations for the **Soumission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Soumissions
    * const soumissions = await prisma.soumission.findMany()
    * ```
    */
  get soumission(): Prisma.SoumissionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Entreprise: 'Entreprise',
    Categorie: 'Categorie',
    Formulaire: 'Formulaire',
    Galerie: 'Galerie',
    Input: 'Input',
    Option: 'Option',
    Soumission: 'Soumission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "entreprise" | "categorie" | "formulaire" | "galerie" | "input" | "option" | "soumission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrepriseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrepriseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Formulaire: {
        payload: Prisma.$FormulairePayload<ExtArgs>
        fields: Prisma.FormulaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormulaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormulaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          findFirst: {
            args: Prisma.FormulaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormulaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          findMany: {
            args: Prisma.FormulaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>[]
          }
          create: {
            args: Prisma.FormulaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          createMany: {
            args: Prisma.FormulaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormulaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>[]
          }
          delete: {
            args: Prisma.FormulaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          update: {
            args: Prisma.FormulaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          deleteMany: {
            args: Prisma.FormulaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormulaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormulaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>[]
          }
          upsert: {
            args: Prisma.FormulaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormulairePayload>
          }
          aggregate: {
            args: Prisma.FormulaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormulaire>
          }
          groupBy: {
            args: Prisma.FormulaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormulaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormulaireCountArgs<ExtArgs>
            result: $Utils.Optional<FormulaireCountAggregateOutputType> | number
          }
        }
      }
      Galerie: {
        payload: Prisma.$GaleriePayload<ExtArgs>
        fields: Prisma.GalerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findFirst: {
            args: Prisma.GalerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findMany: {
            args: Prisma.GalerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          create: {
            args: Prisma.GalerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          createMany: {
            args: Prisma.GalerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          delete: {
            args: Prisma.GalerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          update: {
            args: Prisma.GalerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          deleteMany: {
            args: Prisma.GalerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          upsert: {
            args: Prisma.GalerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          aggregate: {
            args: Prisma.GalerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalerie>
          }
          groupBy: {
            args: Prisma.GalerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalerieCountArgs<ExtArgs>
            result: $Utils.Optional<GalerieCountAggregateOutputType> | number
          }
        }
      }
      Input: {
        payload: Prisma.$InputPayload<ExtArgs>
        fields: Prisma.InputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InputFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InputFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          findFirst: {
            args: Prisma.InputFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InputFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          findMany: {
            args: Prisma.InputFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>[]
          }
          create: {
            args: Prisma.InputCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          createMany: {
            args: Prisma.InputCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InputCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>[]
          }
          delete: {
            args: Prisma.InputDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          update: {
            args: Prisma.InputUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          deleteMany: {
            args: Prisma.InputDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InputUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InputUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>[]
          }
          upsert: {
            args: Prisma.InputUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InputPayload>
          }
          aggregate: {
            args: Prisma.InputAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInput>
          }
          groupBy: {
            args: Prisma.InputGroupByArgs<ExtArgs>
            result: $Utils.Optional<InputGroupByOutputType>[]
          }
          count: {
            args: Prisma.InputCountArgs<ExtArgs>
            result: $Utils.Optional<InputCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      Soumission: {
        payload: Prisma.$SoumissionPayload<ExtArgs>
        fields: Prisma.SoumissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoumissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoumissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          findFirst: {
            args: Prisma.SoumissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoumissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          findMany: {
            args: Prisma.SoumissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          create: {
            args: Prisma.SoumissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          createMany: {
            args: Prisma.SoumissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoumissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          delete: {
            args: Prisma.SoumissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          update: {
            args: Prisma.SoumissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          deleteMany: {
            args: Prisma.SoumissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoumissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoumissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>[]
          }
          upsert: {
            args: Prisma.SoumissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoumissionPayload>
          }
          aggregate: {
            args: Prisma.SoumissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoumission>
          }
          groupBy: {
            args: Prisma.SoumissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoumissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoumissionCountArgs<ExtArgs>
            result: $Utils.Optional<SoumissionCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    entreprise?: EntrepriseOmit
    categorie?: CategorieOmit
    formulaire?: FormulaireOmit
    galerie?: GalerieOmit
    input?: InputOmit
    option?: OptionOmit
    soumission?: SoumissionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    entreprises: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | UserCountOutputTypeCountEntreprisesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEntreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
  }


  /**
   * Count Type EntrepriseCountOutputType
   */

  export type EntrepriseCountOutputType = {
    photos: number
    formulaires: number
  }

  export type EntrepriseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | EntrepriseCountOutputTypeCountPhotosArgs
    formulaires?: boolean | EntrepriseCountOutputTypeCountFormulairesArgs
  }

  // Custom InputTypes
  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepriseCountOutputType
     */
    select?: EntrepriseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountFormulairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormulaireWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    entreprises: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | CategorieCountOutputTypeCountEntreprisesArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountEntreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
  }


  /**
   * Count Type FormulaireCountOutputType
   */

  export type FormulaireCountOutputType = {
    inputs: number
    soumissions: number
  }

  export type FormulaireCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inputs?: boolean | FormulaireCountOutputTypeCountInputsArgs
    soumissions?: boolean | FormulaireCountOutputTypeCountSoumissionsArgs
  }

  // Custom InputTypes
  /**
   * FormulaireCountOutputType without action
   */
  export type FormulaireCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormulaireCountOutputType
     */
    select?: FormulaireCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormulaireCountOutputType without action
   */
  export type FormulaireCountOutputTypeCountInputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputWhereInput
  }

  /**
   * FormulaireCountOutputType without action
   */
  export type FormulaireCountOutputTypeCountSoumissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoumissionWhereInput
  }


  /**
   * Count Type InputCountOutputType
   */

  export type InputCountOutputType = {
    options: number
  }

  export type InputCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | InputCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * InputCountOutputType without action
   */
  export type InputCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputCountOutputType
     */
    select?: InputCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InputCountOutputType without action
   */
  export type InputCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.EnumRole | null
    active: boolean | null
    refresh_token: string | null
    reset_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.EnumRole | null
    active: boolean | null
    refresh_token: string | null
    reset_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    active: number
    refresh_token: number
    reset_token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    refresh_token?: true
    reset_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    refresh_token?: true
    reset_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    refresh_token?: true
    reset_token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.EnumRole
    active: boolean
    refresh_token: string | null
    reset_token: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    refresh_token?: boolean
    reset_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprises?: boolean | User$entreprisesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    refresh_token?: boolean
    reset_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    refresh_token?: boolean
    reset_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    refresh_token?: boolean
    reset_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "active" | "refresh_token" | "reset_token" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | User$entreprisesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      entreprises: Prisma.$EntreprisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.EnumRole
      active: boolean
      refresh_token: string | null
      reset_token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprises<T extends User$entreprisesArgs<ExtArgs> = {}>(args?: Subset<T, User$entreprisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'EnumRole'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly reset_token: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.entreprises
   */
  export type User$entreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    cursor?: EntrepriseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    categorieId: number | null
  }

  export type EntrepriseSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    categorieId: number | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    city: string | null
    cp: string | null
    address1: string | null
    address2: string | null
    phone: string | null
    description: string | null
    image: string | null
    ownerId: number | null
    categorieId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    city: string | null
    cp: string | null
    address1: string | null
    address2: string | null
    phone: string | null
    description: string | null
    image: string | null
    ownerId: number | null
    categorieId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    name: number
    email: number
    city: number
    cp: number
    address1: number
    address2: number
    phone: number
    description: number
    image: number
    ownerId: number
    categorieId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntrepriseAvgAggregateInputType = {
    id?: true
    ownerId?: true
    categorieId?: true
  }

  export type EntrepriseSumAggregateInputType = {
    id?: true
    ownerId?: true
    categorieId?: true
  }

  export type EntrepriseMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    city?: true
    cp?: true
    address1?: true
    address2?: true
    phone?: true
    description?: true
    image?: true
    ownerId?: true
    categorieId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    city?: true
    cp?: true
    address1?: true
    address2?: true
    phone?: true
    description?: true
    image?: true
    ownerId?: true
    categorieId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    city?: true
    cp?: true
    address1?: true
    address2?: true
    phone?: true
    description?: true
    image?: true
    ownerId?: true
    categorieId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrepriseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrepriseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _avg?: EntrepriseAvgAggregateInputType
    _sum?: EntrepriseSumAggregateInputType
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2: string | null
    phone: string | null
    description: string | null
    image: string | null
    ownerId: number
    categorieId: number | null
    createdAt: Date
    updatedAt: Date
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    city?: boolean
    cp?: boolean
    address1?: boolean
    address2?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    categorieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
    photos?: boolean | Entreprise$photosArgs<ExtArgs>
    formulaires?: boolean | Entreprise$formulairesArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    city?: boolean
    cp?: boolean
    address1?: boolean
    address2?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    categorieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    city?: boolean
    cp?: boolean
    address1?: boolean
    address2?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    categorieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    city?: boolean
    cp?: boolean
    address1?: boolean
    address2?: boolean
    phone?: boolean
    description?: boolean
    image?: boolean
    ownerId?: boolean
    categorieId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "city" | "cp" | "address1" | "address2" | "phone" | "description" | "image" | "ownerId" | "categorieId" | "createdAt" | "updatedAt", ExtArgs["result"]["entreprise"]>
  export type EntrepriseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
    photos?: boolean | Entreprise$photosArgs<ExtArgs>
    formulaires?: boolean | Entreprise$formulairesArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrepriseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
  }
  export type EntrepriseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    categorie?: boolean | Entreprise$categorieArgs<ExtArgs>
  }

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      categorie: Prisma.$CategoriePayload<ExtArgs> | null
      photos: Prisma.$GaleriePayload<ExtArgs>[]
      formulaires: Prisma.$FormulairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      city: string
      cp: string
      address1: string
      address2: string | null
      phone: string | null
      description: string | null
      image: string | null
      ownerId: number
      categorieId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entreprises and returns the data saved in the database.
     * @param {EntrepriseCreateManyAndReturnArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrepriseCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrepriseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises and returns the data updated in the database.
     * @param {EntrepriseUpdateManyAndReturnArgs} args - Arguments to update many Entreprises.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntrepriseUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrepriseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
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
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categorie<T extends Entreprise$categorieArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$categorieArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    photos<T extends Entreprise$photosArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formulaires<T extends Entreprise$formulairesArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$formulairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'Int'>
    readonly name: FieldRef<"Entreprise", 'String'>
    readonly email: FieldRef<"Entreprise", 'String'>
    readonly city: FieldRef<"Entreprise", 'String'>
    readonly cp: FieldRef<"Entreprise", 'String'>
    readonly address1: FieldRef<"Entreprise", 'String'>
    readonly address2: FieldRef<"Entreprise", 'String'>
    readonly phone: FieldRef<"Entreprise", 'String'>
    readonly description: FieldRef<"Entreprise", 'String'>
    readonly image: FieldRef<"Entreprise", 'String'>
    readonly ownerId: FieldRef<"Entreprise", 'Int'>
    readonly categorieId: FieldRef<"Entreprise", 'Int'>
    readonly createdAt: FieldRef<"Entreprise", 'DateTime'>
    readonly updatedAt: FieldRef<"Entreprise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise createManyAndReturn
   */
  export type EntrepriseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise updateManyAndReturn
   */
  export type EntrepriseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise.categorie
   */
  export type Entreprise$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    where?: CategorieWhereInput
  }

  /**
   * Entreprise.photos
   */
  export type Entreprise$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    cursor?: GalerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Entreprise.formulaires
   */
  export type Entreprise$formulairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    where?: FormulaireWhereInput
    orderBy?: FormulaireOrderByWithRelationInput | FormulaireOrderByWithRelationInput[]
    cursor?: FormulaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormulaireScalarFieldEnum | FormulaireScalarFieldEnum[]
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entreprises?: boolean | Categorie$entreprisesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | Categorie$entreprisesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      entreprises: Prisma.$EntreprisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
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
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprises<T extends Categorie$entreprisesArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$entreprisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'Int'>
    readonly name: FieldRef<"Categorie", 'String'>
    readonly createdAt: FieldRef<"Categorie", 'DateTime'>
    readonly updatedAt: FieldRef<"Categorie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.entreprises
   */
  export type Categorie$entreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    cursor?: EntrepriseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Formulaire
   */

  export type AggregateFormulaire = {
    _count: FormulaireCountAggregateOutputType | null
    _avg: FormulaireAvgAggregateOutputType | null
    _sum: FormulaireSumAggregateOutputType | null
    _min: FormulaireMinAggregateOutputType | null
    _max: FormulaireMaxAggregateOutputType | null
  }

  export type FormulaireAvgAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type FormulaireSumAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type FormulaireMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    entrepriseId: number | null
  }

  export type FormulaireMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    entrepriseId: number | null
  }

  export type FormulaireCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    entrepriseId: number
    _all: number
  }


  export type FormulaireAvgAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type FormulaireSumAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type FormulaireMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
  }

  export type FormulaireMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
  }

  export type FormulaireCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
    _all?: true
  }

  export type FormulaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formulaire to aggregate.
     */
    where?: FormulaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formulaires to fetch.
     */
    orderBy?: FormulaireOrderByWithRelationInput | FormulaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormulaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formulaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formulaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formulaires
    **/
    _count?: true | FormulaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormulaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormulaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormulaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormulaireMaxAggregateInputType
  }

  export type GetFormulaireAggregateType<T extends FormulaireAggregateArgs> = {
        [P in keyof T & keyof AggregateFormulaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormulaire[P]>
      : GetScalarType<T[P], AggregateFormulaire[P]>
  }




  export type FormulaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormulaireWhereInput
    orderBy?: FormulaireOrderByWithAggregationInput | FormulaireOrderByWithAggregationInput[]
    by: FormulaireScalarFieldEnum[] | FormulaireScalarFieldEnum
    having?: FormulaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormulaireCountAggregateInputType | true
    _avg?: FormulaireAvgAggregateInputType
    _sum?: FormulaireSumAggregateInputType
    _min?: FormulaireMinAggregateInputType
    _max?: FormulaireMaxAggregateInputType
  }

  export type FormulaireGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    entrepriseId: number
    _count: FormulaireCountAggregateOutputType | null
    _avg: FormulaireAvgAggregateOutputType | null
    _sum: FormulaireSumAggregateOutputType | null
    _min: FormulaireMinAggregateOutputType | null
    _max: FormulaireMaxAggregateOutputType | null
  }

  type GetFormulaireGroupByPayload<T extends FormulaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormulaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormulaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormulaireGroupByOutputType[P]>
            : GetScalarType<T[P], FormulaireGroupByOutputType[P]>
        }
      >
    >


  export type FormulaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    inputs?: boolean | Formulaire$inputsArgs<ExtArgs>
    soumissions?: boolean | Formulaire$soumissionsArgs<ExtArgs>
    _count?: boolean | FormulaireCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulaire"]>

  export type FormulaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulaire"]>

  export type FormulaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulaire"]>

  export type FormulaireSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
  }

  export type FormulaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "entrepriseId", ExtArgs["result"]["formulaire"]>
  export type FormulaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    inputs?: boolean | Formulaire$inputsArgs<ExtArgs>
    soumissions?: boolean | Formulaire$soumissionsArgs<ExtArgs>
    _count?: boolean | FormulaireCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormulaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }
  export type FormulaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }

  export type $FormulairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formulaire"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs>
      inputs: Prisma.$InputPayload<ExtArgs>[]
      soumissions: Prisma.$SoumissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      entrepriseId: number
    }, ExtArgs["result"]["formulaire"]>
    composites: {}
  }

  type FormulaireGetPayload<S extends boolean | null | undefined | FormulaireDefaultArgs> = $Result.GetResult<Prisma.$FormulairePayload, S>

  type FormulaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormulaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormulaireCountAggregateInputType | true
    }

  export interface FormulaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formulaire'], meta: { name: 'Formulaire' } }
    /**
     * Find zero or one Formulaire that matches the filter.
     * @param {FormulaireFindUniqueArgs} args - Arguments to find a Formulaire
     * @example
     * // Get one Formulaire
     * const formulaire = await prisma.formulaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormulaireFindUniqueArgs>(args: SelectSubset<T, FormulaireFindUniqueArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formulaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormulaireFindUniqueOrThrowArgs} args - Arguments to find a Formulaire
     * @example
     * // Get one Formulaire
     * const formulaire = await prisma.formulaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormulaireFindUniqueOrThrowArgs>(args: SelectSubset<T, FormulaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireFindFirstArgs} args - Arguments to find a Formulaire
     * @example
     * // Get one Formulaire
     * const formulaire = await prisma.formulaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormulaireFindFirstArgs>(args?: SelectSubset<T, FormulaireFindFirstArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireFindFirstOrThrowArgs} args - Arguments to find a Formulaire
     * @example
     * // Get one Formulaire
     * const formulaire = await prisma.formulaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormulaireFindFirstOrThrowArgs>(args?: SelectSubset<T, FormulaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formulaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formulaires
     * const formulaires = await prisma.formulaire.findMany()
     * 
     * // Get first 10 Formulaires
     * const formulaires = await prisma.formulaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formulaireWithIdOnly = await prisma.formulaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormulaireFindManyArgs>(args?: SelectSubset<T, FormulaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formulaire.
     * @param {FormulaireCreateArgs} args - Arguments to create a Formulaire.
     * @example
     * // Create one Formulaire
     * const Formulaire = await prisma.formulaire.create({
     *   data: {
     *     // ... data to create a Formulaire
     *   }
     * })
     * 
     */
    create<T extends FormulaireCreateArgs>(args: SelectSubset<T, FormulaireCreateArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formulaires.
     * @param {FormulaireCreateManyArgs} args - Arguments to create many Formulaires.
     * @example
     * // Create many Formulaires
     * const formulaire = await prisma.formulaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormulaireCreateManyArgs>(args?: SelectSubset<T, FormulaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formulaires and returns the data saved in the database.
     * @param {FormulaireCreateManyAndReturnArgs} args - Arguments to create many Formulaires.
     * @example
     * // Create many Formulaires
     * const formulaire = await prisma.formulaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formulaires and only return the `id`
     * const formulaireWithIdOnly = await prisma.formulaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormulaireCreateManyAndReturnArgs>(args?: SelectSubset<T, FormulaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formulaire.
     * @param {FormulaireDeleteArgs} args - Arguments to delete one Formulaire.
     * @example
     * // Delete one Formulaire
     * const Formulaire = await prisma.formulaire.delete({
     *   where: {
     *     // ... filter to delete one Formulaire
     *   }
     * })
     * 
     */
    delete<T extends FormulaireDeleteArgs>(args: SelectSubset<T, FormulaireDeleteArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formulaire.
     * @param {FormulaireUpdateArgs} args - Arguments to update one Formulaire.
     * @example
     * // Update one Formulaire
     * const formulaire = await prisma.formulaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormulaireUpdateArgs>(args: SelectSubset<T, FormulaireUpdateArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formulaires.
     * @param {FormulaireDeleteManyArgs} args - Arguments to filter Formulaires to delete.
     * @example
     * // Delete a few Formulaires
     * const { count } = await prisma.formulaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormulaireDeleteManyArgs>(args?: SelectSubset<T, FormulaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formulaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formulaires
     * const formulaire = await prisma.formulaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormulaireUpdateManyArgs>(args: SelectSubset<T, FormulaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formulaires and returns the data updated in the database.
     * @param {FormulaireUpdateManyAndReturnArgs} args - Arguments to update many Formulaires.
     * @example
     * // Update many Formulaires
     * const formulaire = await prisma.formulaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formulaires and only return the `id`
     * const formulaireWithIdOnly = await prisma.formulaire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormulaireUpdateManyAndReturnArgs>(args: SelectSubset<T, FormulaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formulaire.
     * @param {FormulaireUpsertArgs} args - Arguments to update or create a Formulaire.
     * @example
     * // Update or create a Formulaire
     * const formulaire = await prisma.formulaire.upsert({
     *   create: {
     *     // ... data to create a Formulaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formulaire we want to update
     *   }
     * })
     */
    upsert<T extends FormulaireUpsertArgs>(args: SelectSubset<T, FormulaireUpsertArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formulaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireCountArgs} args - Arguments to filter Formulaires to count.
     * @example
     * // Count the number of Formulaires
     * const count = await prisma.formulaire.count({
     *   where: {
     *     // ... the filter for the Formulaires we want to count
     *   }
     * })
    **/
    count<T extends FormulaireCountArgs>(
      args?: Subset<T, FormulaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormulaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formulaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormulaireAggregateArgs>(args: Subset<T, FormulaireAggregateArgs>): Prisma.PrismaPromise<GetFormulaireAggregateType<T>>

    /**
     * Group by Formulaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormulaireGroupByArgs} args - Group by arguments.
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
      T extends FormulaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormulaireGroupByArgs['orderBy'] }
        : { orderBy?: FormulaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormulaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormulaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formulaire model
   */
  readonly fields: FormulaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formulaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormulaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends EntrepriseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrepriseDefaultArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inputs<T extends Formulaire$inputsArgs<ExtArgs> = {}>(args?: Subset<T, Formulaire$inputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    soumissions<T extends Formulaire$soumissionsArgs<ExtArgs> = {}>(args?: Subset<T, Formulaire$soumissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Formulaire model
   */
  interface FormulaireFieldRefs {
    readonly id: FieldRef<"Formulaire", 'Int'>
    readonly name: FieldRef<"Formulaire", 'String'>
    readonly createdAt: FieldRef<"Formulaire", 'DateTime'>
    readonly updatedAt: FieldRef<"Formulaire", 'DateTime'>
    readonly entrepriseId: FieldRef<"Formulaire", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Formulaire findUnique
   */
  export type FormulaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter, which Formulaire to fetch.
     */
    where: FormulaireWhereUniqueInput
  }

  /**
   * Formulaire findUniqueOrThrow
   */
  export type FormulaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter, which Formulaire to fetch.
     */
    where: FormulaireWhereUniqueInput
  }

  /**
   * Formulaire findFirst
   */
  export type FormulaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter, which Formulaire to fetch.
     */
    where?: FormulaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formulaires to fetch.
     */
    orderBy?: FormulaireOrderByWithRelationInput | FormulaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formulaires.
     */
    cursor?: FormulaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formulaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formulaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formulaires.
     */
    distinct?: FormulaireScalarFieldEnum | FormulaireScalarFieldEnum[]
  }

  /**
   * Formulaire findFirstOrThrow
   */
  export type FormulaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter, which Formulaire to fetch.
     */
    where?: FormulaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formulaires to fetch.
     */
    orderBy?: FormulaireOrderByWithRelationInput | FormulaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formulaires.
     */
    cursor?: FormulaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formulaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formulaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formulaires.
     */
    distinct?: FormulaireScalarFieldEnum | FormulaireScalarFieldEnum[]
  }

  /**
   * Formulaire findMany
   */
  export type FormulaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter, which Formulaires to fetch.
     */
    where?: FormulaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formulaires to fetch.
     */
    orderBy?: FormulaireOrderByWithRelationInput | FormulaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formulaires.
     */
    cursor?: FormulaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formulaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formulaires.
     */
    skip?: number
    distinct?: FormulaireScalarFieldEnum | FormulaireScalarFieldEnum[]
  }

  /**
   * Formulaire create
   */
  export type FormulaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Formulaire.
     */
    data: XOR<FormulaireCreateInput, FormulaireUncheckedCreateInput>
  }

  /**
   * Formulaire createMany
   */
  export type FormulaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formulaires.
     */
    data: FormulaireCreateManyInput | FormulaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formulaire createManyAndReturn
   */
  export type FormulaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * The data used to create many Formulaires.
     */
    data: FormulaireCreateManyInput | FormulaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Formulaire update
   */
  export type FormulaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Formulaire.
     */
    data: XOR<FormulaireUpdateInput, FormulaireUncheckedUpdateInput>
    /**
     * Choose, which Formulaire to update.
     */
    where: FormulaireWhereUniqueInput
  }

  /**
   * Formulaire updateMany
   */
  export type FormulaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formulaires.
     */
    data: XOR<FormulaireUpdateManyMutationInput, FormulaireUncheckedUpdateManyInput>
    /**
     * Filter which Formulaires to update
     */
    where?: FormulaireWhereInput
    /**
     * Limit how many Formulaires to update.
     */
    limit?: number
  }

  /**
   * Formulaire updateManyAndReturn
   */
  export type FormulaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * The data used to update Formulaires.
     */
    data: XOR<FormulaireUpdateManyMutationInput, FormulaireUncheckedUpdateManyInput>
    /**
     * Filter which Formulaires to update
     */
    where?: FormulaireWhereInput
    /**
     * Limit how many Formulaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Formulaire upsert
   */
  export type FormulaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Formulaire to update in case it exists.
     */
    where: FormulaireWhereUniqueInput
    /**
     * In case the Formulaire found by the `where` argument doesn't exist, create a new Formulaire with this data.
     */
    create: XOR<FormulaireCreateInput, FormulaireUncheckedCreateInput>
    /**
     * In case the Formulaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormulaireUpdateInput, FormulaireUncheckedUpdateInput>
  }

  /**
   * Formulaire delete
   */
  export type FormulaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
    /**
     * Filter which Formulaire to delete.
     */
    where: FormulaireWhereUniqueInput
  }

  /**
   * Formulaire deleteMany
   */
  export type FormulaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formulaires to delete
     */
    where?: FormulaireWhereInput
    /**
     * Limit how many Formulaires to delete.
     */
    limit?: number
  }

  /**
   * Formulaire.inputs
   */
  export type Formulaire$inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    where?: InputWhereInput
    orderBy?: InputOrderByWithRelationInput | InputOrderByWithRelationInput[]
    cursor?: InputWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InputScalarFieldEnum | InputScalarFieldEnum[]
  }

  /**
   * Formulaire.soumissions
   */
  export type Formulaire$soumissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    where?: SoumissionWhereInput
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    cursor?: SoumissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Formulaire without action
   */
  export type FormulaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulaire
     */
    select?: FormulaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulaire
     */
    omit?: FormulaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormulaireInclude<ExtArgs> | null
  }


  /**
   * Model Galerie
   */

  export type AggregateGalerie = {
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  export type GalerieAvgAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type GalerieSumAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type GalerieMinAggregateOutputType = {
    id: number | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    entrepriseId: number | null
  }

  export type GalerieMaxAggregateOutputType = {
    id: number | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
    entrepriseId: number | null
  }

  export type GalerieCountAggregateOutputType = {
    id: number
    path: number
    createdAt: number
    updatedAt: number
    entrepriseId: number
    _all: number
  }


  export type GalerieAvgAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type GalerieSumAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type GalerieMinAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
  }

  export type GalerieMaxAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
  }

  export type GalerieCountAggregateInputType = {
    id?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    entrepriseId?: true
    _all?: true
  }

  export type GalerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerie to aggregate.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeries
    **/
    _count?: true | GalerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalerieMaxAggregateInputType
  }

  export type GetGalerieAggregateType<T extends GalerieAggregateArgs> = {
        [P in keyof T & keyof AggregateGalerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalerie[P]>
      : GetScalarType<T[P], AggregateGalerie[P]>
  }




  export type GalerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithAggregationInput | GalerieOrderByWithAggregationInput[]
    by: GalerieScalarFieldEnum[] | GalerieScalarFieldEnum
    having?: GalerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalerieCountAggregateInputType | true
    _avg?: GalerieAvgAggregateInputType
    _sum?: GalerieSumAggregateInputType
    _min?: GalerieMinAggregateInputType
    _max?: GalerieMaxAggregateInputType
  }

  export type GalerieGroupByOutputType = {
    id: number
    path: string
    createdAt: Date
    updatedAt: Date
    entrepriseId: number
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  type GetGalerieGroupByPayload<T extends GalerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalerieGroupByOutputType[P]>
            : GetScalarType<T[P], GalerieGroupByOutputType[P]>
        }
      >
    >


  export type GalerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectScalar = {
    id?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrepriseId?: boolean
  }

  export type GalerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "createdAt" | "updatedAt" | "entrepriseId", ExtArgs["result"]["galerie"]>
  export type GalerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
  }

  export type $GaleriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galerie"
    objects: {
      entreprise: Prisma.$EntreprisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      createdAt: Date
      updatedAt: Date
      entrepriseId: number
    }, ExtArgs["result"]["galerie"]>
    composites: {}
  }

  type GalerieGetPayload<S extends boolean | null | undefined | GalerieDefaultArgs> = $Result.GetResult<Prisma.$GaleriePayload, S>

  type GalerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalerieCountAggregateInputType | true
    }

  export interface GalerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galerie'], meta: { name: 'Galerie' } }
    /**
     * Find zero or one Galerie that matches the filter.
     * @param {GalerieFindUniqueArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalerieFindUniqueArgs>(args: SelectSubset<T, GalerieFindUniqueArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalerieFindUniqueOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalerieFindUniqueOrThrowArgs>(args: SelectSubset<T, GalerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalerieFindFirstArgs>(args?: SelectSubset<T, GalerieFindFirstArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalerieFindFirstOrThrowArgs>(args?: SelectSubset<T, GalerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeries
     * const galeries = await prisma.galerie.findMany()
     * 
     * // Get first 10 Galeries
     * const galeries = await prisma.galerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galerieWithIdOnly = await prisma.galerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalerieFindManyArgs>(args?: SelectSubset<T, GalerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galerie.
     * @param {GalerieCreateArgs} args - Arguments to create a Galerie.
     * @example
     * // Create one Galerie
     * const Galerie = await prisma.galerie.create({
     *   data: {
     *     // ... data to create a Galerie
     *   }
     * })
     * 
     */
    create<T extends GalerieCreateArgs>(args: SelectSubset<T, GalerieCreateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeries.
     * @param {GalerieCreateManyArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalerieCreateManyArgs>(args?: SelectSubset<T, GalerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galeries and returns the data saved in the database.
     * @param {GalerieCreateManyAndReturnArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalerieCreateManyAndReturnArgs>(args?: SelectSubset<T, GalerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Galerie.
     * @param {GalerieDeleteArgs} args - Arguments to delete one Galerie.
     * @example
     * // Delete one Galerie
     * const Galerie = await prisma.galerie.delete({
     *   where: {
     *     // ... filter to delete one Galerie
     *   }
     * })
     * 
     */
    delete<T extends GalerieDeleteArgs>(args: SelectSubset<T, GalerieDeleteArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galerie.
     * @param {GalerieUpdateArgs} args - Arguments to update one Galerie.
     * @example
     * // Update one Galerie
     * const galerie = await prisma.galerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalerieUpdateArgs>(args: SelectSubset<T, GalerieUpdateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeries.
     * @param {GalerieDeleteManyArgs} args - Arguments to filter Galeries to delete.
     * @example
     * // Delete a few Galeries
     * const { count } = await prisma.galerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalerieDeleteManyArgs>(args?: SelectSubset<T, GalerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalerieUpdateManyArgs>(args: SelectSubset<T, GalerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries and returns the data updated in the database.
     * @param {GalerieUpdateManyAndReturnArgs} args - Arguments to update many Galeries.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalerieUpdateManyAndReturnArgs>(args: SelectSubset<T, GalerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Galerie.
     * @param {GalerieUpsertArgs} args - Arguments to update or create a Galerie.
     * @example
     * // Update or create a Galerie
     * const galerie = await prisma.galerie.upsert({
     *   create: {
     *     // ... data to create a Galerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galerie we want to update
     *   }
     * })
     */
    upsert<T extends GalerieUpsertArgs>(args: SelectSubset<T, GalerieUpsertArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieCountArgs} args - Arguments to filter Galeries to count.
     * @example
     * // Count the number of Galeries
     * const count = await prisma.galerie.count({
     *   where: {
     *     // ... the filter for the Galeries we want to count
     *   }
     * })
    **/
    count<T extends GalerieCountArgs>(
      args?: Subset<T, GalerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalerieAggregateArgs>(args: Subset<T, GalerieAggregateArgs>): Prisma.PrismaPromise<GetGalerieAggregateType<T>>

    /**
     * Group by Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieGroupByArgs} args - Group by arguments.
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
      T extends GalerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalerieGroupByArgs['orderBy'] }
        : { orderBy?: GalerieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galerie model
   */
  readonly fields: GalerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprise<T extends EntrepriseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrepriseDefaultArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Galerie model
   */
  interface GalerieFieldRefs {
    readonly id: FieldRef<"Galerie", 'Int'>
    readonly path: FieldRef<"Galerie", 'String'>
    readonly createdAt: FieldRef<"Galerie", 'DateTime'>
    readonly updatedAt: FieldRef<"Galerie", 'DateTime'>
    readonly entrepriseId: FieldRef<"Galerie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Galerie findUnique
   */
  export type GalerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findUniqueOrThrow
   */
  export type GalerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findFirst
   */
  export type GalerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findFirstOrThrow
   */
  export type GalerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findMany
   */
  export type GalerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galeries to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie create
   */
  export type GalerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Galerie.
     */
    data: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
  }

  /**
   * Galerie createMany
   */
  export type GalerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galerie createManyAndReturn
   */
  export type GalerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie update
   */
  export type GalerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Galerie.
     */
    data: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
    /**
     * Choose, which Galerie to update.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie updateMany
   */
  export type GalerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
  }

  /**
   * Galerie updateManyAndReturn
   */
  export type GalerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie upsert
   */
  export type GalerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Galerie to update in case it exists.
     */
    where: GalerieWhereUniqueInput
    /**
     * In case the Galerie found by the `where` argument doesn't exist, create a new Galerie with this data.
     */
    create: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
    /**
     * In case the Galerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
  }

  /**
   * Galerie delete
   */
  export type GalerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter which Galerie to delete.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie deleteMany
   */
  export type GalerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeries to delete
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to delete.
     */
    limit?: number
  }

  /**
   * Galerie without action
   */
  export type GalerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
  }


  /**
   * Model Input
   */

  export type AggregateInput = {
    _count: InputCountAggregateOutputType | null
    _avg: InputAvgAggregateOutputType | null
    _sum: InputSumAggregateOutputType | null
    _min: InputMinAggregateOutputType | null
    _max: InputMaxAggregateOutputType | null
  }

  export type InputAvgAggregateOutputType = {
    id: number | null
    formulaireId: number | null
  }

  export type InputSumAggregateOutputType = {
    id: number | null
    formulaireId: number | null
  }

  export type InputMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    required: boolean | null
    formulaireId: number | null
  }

  export type InputMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    required: boolean | null
    formulaireId: number | null
  }

  export type InputCountAggregateOutputType = {
    id: number
    name: number
    type: number
    required: number
    formulaireId: number
    _all: number
  }


  export type InputAvgAggregateInputType = {
    id?: true
    formulaireId?: true
  }

  export type InputSumAggregateInputType = {
    id?: true
    formulaireId?: true
  }

  export type InputMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    formulaireId?: true
  }

  export type InputMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    formulaireId?: true
  }

  export type InputCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    required?: true
    formulaireId?: true
    _all?: true
  }

  export type InputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Input to aggregate.
     */
    where?: InputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inputs to fetch.
     */
    orderBy?: InputOrderByWithRelationInput | InputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inputs
    **/
    _count?: true | InputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputMaxAggregateInputType
  }

  export type GetInputAggregateType<T extends InputAggregateArgs> = {
        [P in keyof T & keyof AggregateInput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInput[P]>
      : GetScalarType<T[P], AggregateInput[P]>
  }




  export type InputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputWhereInput
    orderBy?: InputOrderByWithAggregationInput | InputOrderByWithAggregationInput[]
    by: InputScalarFieldEnum[] | InputScalarFieldEnum
    having?: InputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputCountAggregateInputType | true
    _avg?: InputAvgAggregateInputType
    _sum?: InputSumAggregateInputType
    _min?: InputMinAggregateInputType
    _max?: InputMaxAggregateInputType
  }

  export type InputGroupByOutputType = {
    id: number
    name: string
    type: string
    required: boolean
    formulaireId: number
    _count: InputCountAggregateOutputType | null
    _avg: InputAvgAggregateOutputType | null
    _sum: InputSumAggregateOutputType | null
    _min: InputMinAggregateOutputType | null
    _max: InputMaxAggregateOutputType | null
  }

  type GetInputGroupByPayload<T extends InputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputGroupByOutputType[P]>
            : GetScalarType<T[P], InputGroupByOutputType[P]>
        }
      >
    >


  export type InputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
    options?: boolean | Input$optionsArgs<ExtArgs>
    _count?: boolean | InputCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["input"]>

  export type InputSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["input"]>

  export type InputSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["input"]>

  export type InputSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    required?: boolean
    formulaireId?: boolean
  }

  export type InputOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "required" | "formulaireId", ExtArgs["result"]["input"]>
  export type InputInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
    options?: boolean | Input$optionsArgs<ExtArgs>
    _count?: boolean | InputCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InputIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }
  export type InputIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }

  export type $InputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Input"
    objects: {
      formulaire: Prisma.$FormulairePayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      required: boolean
      formulaireId: number
    }, ExtArgs["result"]["input"]>
    composites: {}
  }

  type InputGetPayload<S extends boolean | null | undefined | InputDefaultArgs> = $Result.GetResult<Prisma.$InputPayload, S>

  type InputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InputFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InputCountAggregateInputType | true
    }

  export interface InputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Input'], meta: { name: 'Input' } }
    /**
     * Find zero or one Input that matches the filter.
     * @param {InputFindUniqueArgs} args - Arguments to find a Input
     * @example
     * // Get one Input
     * const input = await prisma.input.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InputFindUniqueArgs>(args: SelectSubset<T, InputFindUniqueArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Input that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InputFindUniqueOrThrowArgs} args - Arguments to find a Input
     * @example
     * // Get one Input
     * const input = await prisma.input.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InputFindUniqueOrThrowArgs>(args: SelectSubset<T, InputFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Input that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputFindFirstArgs} args - Arguments to find a Input
     * @example
     * // Get one Input
     * const input = await prisma.input.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InputFindFirstArgs>(args?: SelectSubset<T, InputFindFirstArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Input that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputFindFirstOrThrowArgs} args - Arguments to find a Input
     * @example
     * // Get one Input
     * const input = await prisma.input.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InputFindFirstOrThrowArgs>(args?: SelectSubset<T, InputFindFirstOrThrowArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inputs
     * const inputs = await prisma.input.findMany()
     * 
     * // Get first 10 Inputs
     * const inputs = await prisma.input.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputWithIdOnly = await prisma.input.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InputFindManyArgs>(args?: SelectSubset<T, InputFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Input.
     * @param {InputCreateArgs} args - Arguments to create a Input.
     * @example
     * // Create one Input
     * const Input = await prisma.input.create({
     *   data: {
     *     // ... data to create a Input
     *   }
     * })
     * 
     */
    create<T extends InputCreateArgs>(args: SelectSubset<T, InputCreateArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inputs.
     * @param {InputCreateManyArgs} args - Arguments to create many Inputs.
     * @example
     * // Create many Inputs
     * const input = await prisma.input.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InputCreateManyArgs>(args?: SelectSubset<T, InputCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inputs and returns the data saved in the database.
     * @param {InputCreateManyAndReturnArgs} args - Arguments to create many Inputs.
     * @example
     * // Create many Inputs
     * const input = await prisma.input.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inputs and only return the `id`
     * const inputWithIdOnly = await prisma.input.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InputCreateManyAndReturnArgs>(args?: SelectSubset<T, InputCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Input.
     * @param {InputDeleteArgs} args - Arguments to delete one Input.
     * @example
     * // Delete one Input
     * const Input = await prisma.input.delete({
     *   where: {
     *     // ... filter to delete one Input
     *   }
     * })
     * 
     */
    delete<T extends InputDeleteArgs>(args: SelectSubset<T, InputDeleteArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Input.
     * @param {InputUpdateArgs} args - Arguments to update one Input.
     * @example
     * // Update one Input
     * const input = await prisma.input.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InputUpdateArgs>(args: SelectSubset<T, InputUpdateArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inputs.
     * @param {InputDeleteManyArgs} args - Arguments to filter Inputs to delete.
     * @example
     * // Delete a few Inputs
     * const { count } = await prisma.input.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InputDeleteManyArgs>(args?: SelectSubset<T, InputDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inputs
     * const input = await prisma.input.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InputUpdateManyArgs>(args: SelectSubset<T, InputUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inputs and returns the data updated in the database.
     * @param {InputUpdateManyAndReturnArgs} args - Arguments to update many Inputs.
     * @example
     * // Update many Inputs
     * const input = await prisma.input.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inputs and only return the `id`
     * const inputWithIdOnly = await prisma.input.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InputUpdateManyAndReturnArgs>(args: SelectSubset<T, InputUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Input.
     * @param {InputUpsertArgs} args - Arguments to update or create a Input.
     * @example
     * // Update or create a Input
     * const input = await prisma.input.upsert({
     *   create: {
     *     // ... data to create a Input
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Input we want to update
     *   }
     * })
     */
    upsert<T extends InputUpsertArgs>(args: SelectSubset<T, InputUpsertArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputCountArgs} args - Arguments to filter Inputs to count.
     * @example
     * // Count the number of Inputs
     * const count = await prisma.input.count({
     *   where: {
     *     // ... the filter for the Inputs we want to count
     *   }
     * })
    **/
    count<T extends InputCountArgs>(
      args?: Subset<T, InputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Input.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InputAggregateArgs>(args: Subset<T, InputAggregateArgs>): Prisma.PrismaPromise<GetInputAggregateType<T>>

    /**
     * Group by Input.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputGroupByArgs} args - Group by arguments.
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
      T extends InputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InputGroupByArgs['orderBy'] }
        : { orderBy?: InputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Input model
   */
  readonly fields: InputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Input.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formulaire<T extends FormulaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormulaireDefaultArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Input$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Input$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Input model
   */
  interface InputFieldRefs {
    readonly id: FieldRef<"Input", 'Int'>
    readonly name: FieldRef<"Input", 'String'>
    readonly type: FieldRef<"Input", 'String'>
    readonly required: FieldRef<"Input", 'Boolean'>
    readonly formulaireId: FieldRef<"Input", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Input findUnique
   */
  export type InputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter, which Input to fetch.
     */
    where: InputWhereUniqueInput
  }

  /**
   * Input findUniqueOrThrow
   */
  export type InputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter, which Input to fetch.
     */
    where: InputWhereUniqueInput
  }

  /**
   * Input findFirst
   */
  export type InputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter, which Input to fetch.
     */
    where?: InputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inputs to fetch.
     */
    orderBy?: InputOrderByWithRelationInput | InputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inputs.
     */
    cursor?: InputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inputs.
     */
    distinct?: InputScalarFieldEnum | InputScalarFieldEnum[]
  }

  /**
   * Input findFirstOrThrow
   */
  export type InputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter, which Input to fetch.
     */
    where?: InputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inputs to fetch.
     */
    orderBy?: InputOrderByWithRelationInput | InputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inputs.
     */
    cursor?: InputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inputs.
     */
    distinct?: InputScalarFieldEnum | InputScalarFieldEnum[]
  }

  /**
   * Input findMany
   */
  export type InputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter, which Inputs to fetch.
     */
    where?: InputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inputs to fetch.
     */
    orderBy?: InputOrderByWithRelationInput | InputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inputs.
     */
    cursor?: InputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inputs.
     */
    skip?: number
    distinct?: InputScalarFieldEnum | InputScalarFieldEnum[]
  }

  /**
   * Input create
   */
  export type InputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * The data needed to create a Input.
     */
    data: XOR<InputCreateInput, InputUncheckedCreateInput>
  }

  /**
   * Input createMany
   */
  export type InputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inputs.
     */
    data: InputCreateManyInput | InputCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Input createManyAndReturn
   */
  export type InputCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * The data used to create many Inputs.
     */
    data: InputCreateManyInput | InputCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Input update
   */
  export type InputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * The data needed to update a Input.
     */
    data: XOR<InputUpdateInput, InputUncheckedUpdateInput>
    /**
     * Choose, which Input to update.
     */
    where: InputWhereUniqueInput
  }

  /**
   * Input updateMany
   */
  export type InputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inputs.
     */
    data: XOR<InputUpdateManyMutationInput, InputUncheckedUpdateManyInput>
    /**
     * Filter which Inputs to update
     */
    where?: InputWhereInput
    /**
     * Limit how many Inputs to update.
     */
    limit?: number
  }

  /**
   * Input updateManyAndReturn
   */
  export type InputUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * The data used to update Inputs.
     */
    data: XOR<InputUpdateManyMutationInput, InputUncheckedUpdateManyInput>
    /**
     * Filter which Inputs to update
     */
    where?: InputWhereInput
    /**
     * Limit how many Inputs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Input upsert
   */
  export type InputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * The filter to search for the Input to update in case it exists.
     */
    where: InputWhereUniqueInput
    /**
     * In case the Input found by the `where` argument doesn't exist, create a new Input with this data.
     */
    create: XOR<InputCreateInput, InputUncheckedCreateInput>
    /**
     * In case the Input was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InputUpdateInput, InputUncheckedUpdateInput>
  }

  /**
   * Input delete
   */
  export type InputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
    /**
     * Filter which Input to delete.
     */
    where: InputWhereUniqueInput
  }

  /**
   * Input deleteMany
   */
  export type InputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inputs to delete
     */
    where?: InputWhereInput
    /**
     * Limit how many Inputs to delete.
     */
    limit?: number
  }

  /**
   * Input.options
   */
  export type Input$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Input without action
   */
  export type InputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Input
     */
    select?: InputSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Input
     */
    omit?: InputOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InputInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    id: number | null
    inputId: number | null
  }

  export type OptionSumAggregateOutputType = {
    id: number | null
    inputId: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: number | null
    value: string | null
    inputId: number | null
  }

  export type OptionMaxAggregateOutputType = {
    id: number | null
    value: string | null
    inputId: number | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    value: number
    inputId: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    id?: true
    inputId?: true
  }

  export type OptionSumAggregateInputType = {
    id?: true
    inputId?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    value?: true
    inputId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    value?: true
    inputId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    value?: true
    inputId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: number
    value: string
    inputId: number
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    inputId?: boolean
    input?: boolean | InputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    inputId?: boolean
    input?: boolean | InputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    inputId?: boolean
    input?: boolean | InputDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    value?: boolean
    inputId?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "inputId", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    input?: boolean | InputDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    input?: boolean | InputDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    input?: boolean | InputDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      input: Prisma.$InputPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      inputId: number
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    input<T extends InputDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InputDefaultArgs<ExtArgs>>): Prisma__InputClient<$Result.GetResult<Prisma.$InputPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'Int'>
    readonly value: FieldRef<"Option", 'String'>
    readonly inputId: FieldRef<"Option", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model Soumission
   */

  export type AggregateSoumission = {
    _count: SoumissionCountAggregateOutputType | null
    _avg: SoumissionAvgAggregateOutputType | null
    _sum: SoumissionSumAggregateOutputType | null
    _min: SoumissionMinAggregateOutputType | null
    _max: SoumissionMaxAggregateOutputType | null
  }

  export type SoumissionAvgAggregateOutputType = {
    id: number | null
    formulaireId: number | null
  }

  export type SoumissionSumAggregateOutputType = {
    id: number | null
    formulaireId: number | null
  }

  export type SoumissionMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    formulaireId: number | null
  }

  export type SoumissionMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
    formulaireId: number | null
  }

  export type SoumissionCountAggregateOutputType = {
    id: number
    content: number
    email: number
    createdAt: number
    updatedAt: number
    formulaireId: number
    _all: number
  }


  export type SoumissionAvgAggregateInputType = {
    id?: true
    formulaireId?: true
  }

  export type SoumissionSumAggregateInputType = {
    id?: true
    formulaireId?: true
  }

  export type SoumissionMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    formulaireId?: true
  }

  export type SoumissionMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    formulaireId?: true
  }

  export type SoumissionCountAggregateInputType = {
    id?: true
    content?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    formulaireId?: true
    _all?: true
  }

  export type SoumissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Soumission to aggregate.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Soumissions
    **/
    _count?: true | SoumissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoumissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoumissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoumissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoumissionMaxAggregateInputType
  }

  export type GetSoumissionAggregateType<T extends SoumissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSoumission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoumission[P]>
      : GetScalarType<T[P], AggregateSoumission[P]>
  }




  export type SoumissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoumissionWhereInput
    orderBy?: SoumissionOrderByWithAggregationInput | SoumissionOrderByWithAggregationInput[]
    by: SoumissionScalarFieldEnum[] | SoumissionScalarFieldEnum
    having?: SoumissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoumissionCountAggregateInputType | true
    _avg?: SoumissionAvgAggregateInputType
    _sum?: SoumissionSumAggregateInputType
    _min?: SoumissionMinAggregateInputType
    _max?: SoumissionMaxAggregateInputType
  }

  export type SoumissionGroupByOutputType = {
    id: number
    content: JsonValue
    email: string
    createdAt: Date
    updatedAt: Date
    formulaireId: number
    _count: SoumissionCountAggregateOutputType | null
    _avg: SoumissionAvgAggregateOutputType | null
    _sum: SoumissionSumAggregateOutputType | null
    _min: SoumissionMinAggregateOutputType | null
    _max: SoumissionMaxAggregateOutputType | null
  }

  type GetSoumissionGroupByPayload<T extends SoumissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoumissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoumissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoumissionGroupByOutputType[P]>
            : GetScalarType<T[P], SoumissionGroupByOutputType[P]>
        }
      >
    >


  export type SoumissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulaireId?: boolean
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soumission"]>

  export type SoumissionSelectScalar = {
    id?: boolean
    content?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulaireId?: boolean
  }

  export type SoumissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "email" | "createdAt" | "updatedAt" | "formulaireId", ExtArgs["result"]["soumission"]>
  export type SoumissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }
  export type SoumissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }
  export type SoumissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulaire?: boolean | FormulaireDefaultArgs<ExtArgs>
  }

  export type $SoumissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Soumission"
    objects: {
      formulaire: Prisma.$FormulairePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: Prisma.JsonValue
      email: string
      createdAt: Date
      updatedAt: Date
      formulaireId: number
    }, ExtArgs["result"]["soumission"]>
    composites: {}
  }

  type SoumissionGetPayload<S extends boolean | null | undefined | SoumissionDefaultArgs> = $Result.GetResult<Prisma.$SoumissionPayload, S>

  type SoumissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoumissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoumissionCountAggregateInputType | true
    }

  export interface SoumissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Soumission'], meta: { name: 'Soumission' } }
    /**
     * Find zero or one Soumission that matches the filter.
     * @param {SoumissionFindUniqueArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoumissionFindUniqueArgs>(args: SelectSubset<T, SoumissionFindUniqueArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Soumission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoumissionFindUniqueOrThrowArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoumissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SoumissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Soumission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindFirstArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoumissionFindFirstArgs>(args?: SelectSubset<T, SoumissionFindFirstArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Soumission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindFirstOrThrowArgs} args - Arguments to find a Soumission
     * @example
     * // Get one Soumission
     * const soumission = await prisma.soumission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoumissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SoumissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Soumissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Soumissions
     * const soumissions = await prisma.soumission.findMany()
     * 
     * // Get first 10 Soumissions
     * const soumissions = await prisma.soumission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const soumissionWithIdOnly = await prisma.soumission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SoumissionFindManyArgs>(args?: SelectSubset<T, SoumissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Soumission.
     * @param {SoumissionCreateArgs} args - Arguments to create a Soumission.
     * @example
     * // Create one Soumission
     * const Soumission = await prisma.soumission.create({
     *   data: {
     *     // ... data to create a Soumission
     *   }
     * })
     * 
     */
    create<T extends SoumissionCreateArgs>(args: SelectSubset<T, SoumissionCreateArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Soumissions.
     * @param {SoumissionCreateManyArgs} args - Arguments to create many Soumissions.
     * @example
     * // Create many Soumissions
     * const soumission = await prisma.soumission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoumissionCreateManyArgs>(args?: SelectSubset<T, SoumissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Soumissions and returns the data saved in the database.
     * @param {SoumissionCreateManyAndReturnArgs} args - Arguments to create many Soumissions.
     * @example
     * // Create many Soumissions
     * const soumission = await prisma.soumission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Soumissions and only return the `id`
     * const soumissionWithIdOnly = await prisma.soumission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoumissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SoumissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Soumission.
     * @param {SoumissionDeleteArgs} args - Arguments to delete one Soumission.
     * @example
     * // Delete one Soumission
     * const Soumission = await prisma.soumission.delete({
     *   where: {
     *     // ... filter to delete one Soumission
     *   }
     * })
     * 
     */
    delete<T extends SoumissionDeleteArgs>(args: SelectSubset<T, SoumissionDeleteArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Soumission.
     * @param {SoumissionUpdateArgs} args - Arguments to update one Soumission.
     * @example
     * // Update one Soumission
     * const soumission = await prisma.soumission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoumissionUpdateArgs>(args: SelectSubset<T, SoumissionUpdateArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Soumissions.
     * @param {SoumissionDeleteManyArgs} args - Arguments to filter Soumissions to delete.
     * @example
     * // Delete a few Soumissions
     * const { count } = await prisma.soumission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoumissionDeleteManyArgs>(args?: SelectSubset<T, SoumissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Soumissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Soumissions
     * const soumission = await prisma.soumission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoumissionUpdateManyArgs>(args: SelectSubset<T, SoumissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Soumissions and returns the data updated in the database.
     * @param {SoumissionUpdateManyAndReturnArgs} args - Arguments to update many Soumissions.
     * @example
     * // Update many Soumissions
     * const soumission = await prisma.soumission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Soumissions and only return the `id`
     * const soumissionWithIdOnly = await prisma.soumission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SoumissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SoumissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Soumission.
     * @param {SoumissionUpsertArgs} args - Arguments to update or create a Soumission.
     * @example
     * // Update or create a Soumission
     * const soumission = await prisma.soumission.upsert({
     *   create: {
     *     // ... data to create a Soumission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Soumission we want to update
     *   }
     * })
     */
    upsert<T extends SoumissionUpsertArgs>(args: SelectSubset<T, SoumissionUpsertArgs<ExtArgs>>): Prisma__SoumissionClient<$Result.GetResult<Prisma.$SoumissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Soumissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionCountArgs} args - Arguments to filter Soumissions to count.
     * @example
     * // Count the number of Soumissions
     * const count = await prisma.soumission.count({
     *   where: {
     *     // ... the filter for the Soumissions we want to count
     *   }
     * })
    **/
    count<T extends SoumissionCountArgs>(
      args?: Subset<T, SoumissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoumissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Soumission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoumissionAggregateArgs>(args: Subset<T, SoumissionAggregateArgs>): Prisma.PrismaPromise<GetSoumissionAggregateType<T>>

    /**
     * Group by Soumission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoumissionGroupByArgs} args - Group by arguments.
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
      T extends SoumissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoumissionGroupByArgs['orderBy'] }
        : { orderBy?: SoumissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SoumissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoumissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Soumission model
   */
  readonly fields: SoumissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Soumission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoumissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formulaire<T extends FormulaireDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormulaireDefaultArgs<ExtArgs>>): Prisma__FormulaireClient<$Result.GetResult<Prisma.$FormulairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Soumission model
   */
  interface SoumissionFieldRefs {
    readonly id: FieldRef<"Soumission", 'Int'>
    readonly content: FieldRef<"Soumission", 'Json'>
    readonly email: FieldRef<"Soumission", 'String'>
    readonly createdAt: FieldRef<"Soumission", 'DateTime'>
    readonly updatedAt: FieldRef<"Soumission", 'DateTime'>
    readonly formulaireId: FieldRef<"Soumission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Soumission findUnique
   */
  export type SoumissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission findUniqueOrThrow
   */
  export type SoumissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission findFirst
   */
  export type SoumissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Soumissions.
     */
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission findFirstOrThrow
   */
  export type SoumissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumission to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Soumissions.
     */
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission findMany
   */
  export type SoumissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter, which Soumissions to fetch.
     */
    where?: SoumissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Soumissions to fetch.
     */
    orderBy?: SoumissionOrderByWithRelationInput | SoumissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Soumissions.
     */
    cursor?: SoumissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Soumissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Soumissions.
     */
    skip?: number
    distinct?: SoumissionScalarFieldEnum | SoumissionScalarFieldEnum[]
  }

  /**
   * Soumission create
   */
  export type SoumissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Soumission.
     */
    data: XOR<SoumissionCreateInput, SoumissionUncheckedCreateInput>
  }

  /**
   * Soumission createMany
   */
  export type SoumissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Soumissions.
     */
    data: SoumissionCreateManyInput | SoumissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Soumission createManyAndReturn
   */
  export type SoumissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * The data used to create many Soumissions.
     */
    data: SoumissionCreateManyInput | SoumissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Soumission update
   */
  export type SoumissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Soumission.
     */
    data: XOR<SoumissionUpdateInput, SoumissionUncheckedUpdateInput>
    /**
     * Choose, which Soumission to update.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission updateMany
   */
  export type SoumissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Soumissions.
     */
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyInput>
    /**
     * Filter which Soumissions to update
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to update.
     */
    limit?: number
  }

  /**
   * Soumission updateManyAndReturn
   */
  export type SoumissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * The data used to update Soumissions.
     */
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyInput>
    /**
     * Filter which Soumissions to update
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Soumission upsert
   */
  export type SoumissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Soumission to update in case it exists.
     */
    where: SoumissionWhereUniqueInput
    /**
     * In case the Soumission found by the `where` argument doesn't exist, create a new Soumission with this data.
     */
    create: XOR<SoumissionCreateInput, SoumissionUncheckedCreateInput>
    /**
     * In case the Soumission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoumissionUpdateInput, SoumissionUncheckedUpdateInput>
  }

  /**
   * Soumission delete
   */
  export type SoumissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
    /**
     * Filter which Soumission to delete.
     */
    where: SoumissionWhereUniqueInput
  }

  /**
   * Soumission deleteMany
   */
  export type SoumissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Soumissions to delete
     */
    where?: SoumissionWhereInput
    /**
     * Limit how many Soumissions to delete.
     */
    limit?: number
  }

  /**
   * Soumission without action
   */
  export type SoumissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Soumission
     */
    select?: SoumissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Soumission
     */
    omit?: SoumissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoumissionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    active: 'active',
    refresh_token: 'refresh_token',
    reset_token: 'reset_token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    city: 'city',
    cp: 'cp',
    address1: 'address1',
    address2: 'address2',
    phone: 'phone',
    description: 'description',
    image: 'image',
    ownerId: 'ownerId',
    categorieId: 'categorieId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const FormulaireScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    entrepriseId: 'entrepriseId'
  };

  export type FormulaireScalarFieldEnum = (typeof FormulaireScalarFieldEnum)[keyof typeof FormulaireScalarFieldEnum]


  export const GalerieScalarFieldEnum: {
    id: 'id',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    entrepriseId: 'entrepriseId'
  };

  export type GalerieScalarFieldEnum = (typeof GalerieScalarFieldEnum)[keyof typeof GalerieScalarFieldEnum]


  export const InputScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    required: 'required',
    formulaireId: 'formulaireId'
  };

  export type InputScalarFieldEnum = (typeof InputScalarFieldEnum)[keyof typeof InputScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    value: 'value',
    inputId: 'inputId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const SoumissionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    formulaireId: 'formulaireId'
  };

  export type SoumissionScalarFieldEnum = (typeof SoumissionScalarFieldEnum)[keyof typeof SoumissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EnumRole'
   */
  export type EnumEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumRole'>
    


  /**
   * Reference to a field of type 'EnumRole[]'
   */
  export type ListEnumEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnumRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumEnumRoleFilter<"User"> | $Enums.EnumRole
    active?: BoolFilter<"User"> | boolean
    refresh_token?: StringNullableFilter<"User"> | string | null
    reset_token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    entreprises?: EntrepriseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entreprises?: EntrepriseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumEnumRoleFilter<"User"> | $Enums.EnumRole
    active?: BoolFilter<"User"> | boolean
    refresh_token?: StringNullableFilter<"User"> | string | null
    reset_token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    entreprises?: EntrepriseListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    reset_token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumEnumRoleWithAggregatesFilter<"User"> | $Enums.EnumRole
    active?: BoolWithAggregatesFilter<"User"> | boolean
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: IntFilter<"Entreprise"> | number
    name?: StringFilter<"Entreprise"> | string
    email?: StringFilter<"Entreprise"> | string
    city?: StringFilter<"Entreprise"> | string
    cp?: StringFilter<"Entreprise"> | string
    address1?: StringFilter<"Entreprise"> | string
    address2?: StringNullableFilter<"Entreprise"> | string | null
    phone?: StringNullableFilter<"Entreprise"> | string | null
    description?: StringNullableFilter<"Entreprise"> | string | null
    image?: StringNullableFilter<"Entreprise"> | string | null
    ownerId?: IntFilter<"Entreprise"> | number
    categorieId?: IntNullableFilter<"Entreprise"> | number | null
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeFilter<"Entreprise"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    categorie?: XOR<CategorieNullableScalarRelationFilter, CategorieWhereInput> | null
    photos?: GalerieListRelationFilter
    formulaires?: FormulaireListRelationFilter
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    cp?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    categorie?: CategorieOrderByWithRelationInput
    photos?: GalerieOrderByRelationAggregateInput
    formulaires?: FormulaireOrderByRelationAggregateInput
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    name?: StringFilter<"Entreprise"> | string
    email?: StringFilter<"Entreprise"> | string
    city?: StringFilter<"Entreprise"> | string
    cp?: StringFilter<"Entreprise"> | string
    address1?: StringFilter<"Entreprise"> | string
    address2?: StringNullableFilter<"Entreprise"> | string | null
    phone?: StringNullableFilter<"Entreprise"> | string | null
    description?: StringNullableFilter<"Entreprise"> | string | null
    image?: StringNullableFilter<"Entreprise"> | string | null
    ownerId?: IntFilter<"Entreprise"> | number
    categorieId?: IntNullableFilter<"Entreprise"> | number | null
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeFilter<"Entreprise"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    categorie?: XOR<CategorieNullableScalarRelationFilter, CategorieWhereInput> | null
    photos?: GalerieListRelationFilter
    formulaires?: FormulaireListRelationFilter
  }, "id">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    cp?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _avg?: EntrepriseAvgOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
    _sum?: EntrepriseSumOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entreprise"> | number
    name?: StringWithAggregatesFilter<"Entreprise"> | string
    email?: StringWithAggregatesFilter<"Entreprise"> | string
    city?: StringWithAggregatesFilter<"Entreprise"> | string
    cp?: StringWithAggregatesFilter<"Entreprise"> | string
    address1?: StringWithAggregatesFilter<"Entreprise"> | string
    address2?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    description?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    image?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    ownerId?: IntWithAggregatesFilter<"Entreprise"> | number
    categorieId?: IntNullableWithAggregatesFilter<"Entreprise"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: IntFilter<"Categorie"> | number
    name?: StringFilter<"Categorie"> | string
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    entreprises?: EntrepriseListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entreprises?: EntrepriseOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    entreprises?: EntrepriseListRelationFilter
  }, "id" | "name">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorie"> | number
    name?: StringWithAggregatesFilter<"Categorie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
  }

  export type FormulaireWhereInput = {
    AND?: FormulaireWhereInput | FormulaireWhereInput[]
    OR?: FormulaireWhereInput[]
    NOT?: FormulaireWhereInput | FormulaireWhereInput[]
    id?: IntFilter<"Formulaire"> | number
    name?: StringFilter<"Formulaire"> | string
    createdAt?: DateTimeFilter<"Formulaire"> | Date | string
    updatedAt?: DateTimeFilter<"Formulaire"> | Date | string
    entrepriseId?: IntFilter<"Formulaire"> | number
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    inputs?: InputListRelationFilter
    soumissions?: SoumissionListRelationFilter
  }

  export type FormulaireOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
    inputs?: InputOrderByRelationAggregateInput
    soumissions?: SoumissionOrderByRelationAggregateInput
  }

  export type FormulaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormulaireWhereInput | FormulaireWhereInput[]
    OR?: FormulaireWhereInput[]
    NOT?: FormulaireWhereInput | FormulaireWhereInput[]
    name?: StringFilter<"Formulaire"> | string
    createdAt?: DateTimeFilter<"Formulaire"> | Date | string
    updatedAt?: DateTimeFilter<"Formulaire"> | Date | string
    entrepriseId?: IntFilter<"Formulaire"> | number
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    inputs?: InputListRelationFilter
    soumissions?: SoumissionListRelationFilter
  }, "id">

  export type FormulaireOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
    _count?: FormulaireCountOrderByAggregateInput
    _avg?: FormulaireAvgOrderByAggregateInput
    _max?: FormulaireMaxOrderByAggregateInput
    _min?: FormulaireMinOrderByAggregateInput
    _sum?: FormulaireSumOrderByAggregateInput
  }

  export type FormulaireScalarWhereWithAggregatesInput = {
    AND?: FormulaireScalarWhereWithAggregatesInput | FormulaireScalarWhereWithAggregatesInput[]
    OR?: FormulaireScalarWhereWithAggregatesInput[]
    NOT?: FormulaireScalarWhereWithAggregatesInput | FormulaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Formulaire"> | number
    name?: StringWithAggregatesFilter<"Formulaire"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Formulaire"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Formulaire"> | Date | string
    entrepriseId?: IntWithAggregatesFilter<"Formulaire"> | number
  }

  export type GalerieWhereInput = {
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    id?: IntFilter<"Galerie"> | number
    path?: StringFilter<"Galerie"> | string
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
    updatedAt?: DateTimeFilter<"Galerie"> | Date | string
    entrepriseId?: IntFilter<"Galerie"> | number
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
  }

  export type GalerieOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
    entreprise?: EntrepriseOrderByWithRelationInput
  }

  export type GalerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    path?: StringFilter<"Galerie"> | string
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
    updatedAt?: DateTimeFilter<"Galerie"> | Date | string
    entrepriseId?: IntFilter<"Galerie"> | number
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
  }, "id">

  export type GalerieOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
    _count?: GalerieCountOrderByAggregateInput
    _avg?: GalerieAvgOrderByAggregateInput
    _max?: GalerieMaxOrderByAggregateInput
    _min?: GalerieMinOrderByAggregateInput
    _sum?: GalerieSumOrderByAggregateInput
  }

  export type GalerieScalarWhereWithAggregatesInput = {
    AND?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    OR?: GalerieScalarWhereWithAggregatesInput[]
    NOT?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Galerie"> | number
    path?: StringWithAggregatesFilter<"Galerie"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Galerie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Galerie"> | Date | string
    entrepriseId?: IntWithAggregatesFilter<"Galerie"> | number
  }

  export type InputWhereInput = {
    AND?: InputWhereInput | InputWhereInput[]
    OR?: InputWhereInput[]
    NOT?: InputWhereInput | InputWhereInput[]
    id?: IntFilter<"Input"> | number
    name?: StringFilter<"Input"> | string
    type?: StringFilter<"Input"> | string
    required?: BoolFilter<"Input"> | boolean
    formulaireId?: IntFilter<"Input"> | number
    formulaire?: XOR<FormulaireScalarRelationFilter, FormulaireWhereInput>
    options?: OptionListRelationFilter
  }

  export type InputOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    formulaireId?: SortOrder
    formulaire?: FormulaireOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
  }

  export type InputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InputWhereInput | InputWhereInput[]
    OR?: InputWhereInput[]
    NOT?: InputWhereInput | InputWhereInput[]
    name?: StringFilter<"Input"> | string
    type?: StringFilter<"Input"> | string
    required?: BoolFilter<"Input"> | boolean
    formulaireId?: IntFilter<"Input"> | number
    formulaire?: XOR<FormulaireScalarRelationFilter, FormulaireWhereInput>
    options?: OptionListRelationFilter
  }, "id">

  export type InputOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    formulaireId?: SortOrder
    _count?: InputCountOrderByAggregateInput
    _avg?: InputAvgOrderByAggregateInput
    _max?: InputMaxOrderByAggregateInput
    _min?: InputMinOrderByAggregateInput
    _sum?: InputSumOrderByAggregateInput
  }

  export type InputScalarWhereWithAggregatesInput = {
    AND?: InputScalarWhereWithAggregatesInput | InputScalarWhereWithAggregatesInput[]
    OR?: InputScalarWhereWithAggregatesInput[]
    NOT?: InputScalarWhereWithAggregatesInput | InputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Input"> | number
    name?: StringWithAggregatesFilter<"Input"> | string
    type?: StringWithAggregatesFilter<"Input"> | string
    required?: BoolWithAggregatesFilter<"Input"> | boolean
    formulaireId?: IntWithAggregatesFilter<"Input"> | number
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: IntFilter<"Option"> | number
    value?: StringFilter<"Option"> | string
    inputId?: IntFilter<"Option"> | number
    input?: XOR<InputScalarRelationFilter, InputWhereInput>
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    inputId?: SortOrder
    input?: InputOrderByWithRelationInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    value?: StringFilter<"Option"> | string
    inputId?: IntFilter<"Option"> | number
    input?: XOR<InputScalarRelationFilter, InputWhereInput>
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    inputId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Option"> | number
    value?: StringWithAggregatesFilter<"Option"> | string
    inputId?: IntWithAggregatesFilter<"Option"> | number
  }

  export type SoumissionWhereInput = {
    AND?: SoumissionWhereInput | SoumissionWhereInput[]
    OR?: SoumissionWhereInput[]
    NOT?: SoumissionWhereInput | SoumissionWhereInput[]
    id?: IntFilter<"Soumission"> | number
    content?: JsonFilter<"Soumission">
    email?: StringFilter<"Soumission"> | string
    createdAt?: DateTimeFilter<"Soumission"> | Date | string
    updatedAt?: DateTimeFilter<"Soumission"> | Date | string
    formulaireId?: IntFilter<"Soumission"> | number
    formulaire?: XOR<FormulaireScalarRelationFilter, FormulaireWhereInput>
  }

  export type SoumissionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formulaireId?: SortOrder
    formulaire?: FormulaireOrderByWithRelationInput
  }

  export type SoumissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SoumissionWhereInput | SoumissionWhereInput[]
    OR?: SoumissionWhereInput[]
    NOT?: SoumissionWhereInput | SoumissionWhereInput[]
    content?: JsonFilter<"Soumission">
    email?: StringFilter<"Soumission"> | string
    createdAt?: DateTimeFilter<"Soumission"> | Date | string
    updatedAt?: DateTimeFilter<"Soumission"> | Date | string
    formulaireId?: IntFilter<"Soumission"> | number
    formulaire?: XOR<FormulaireScalarRelationFilter, FormulaireWhereInput>
  }, "id">

  export type SoumissionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formulaireId?: SortOrder
    _count?: SoumissionCountOrderByAggregateInput
    _avg?: SoumissionAvgOrderByAggregateInput
    _max?: SoumissionMaxOrderByAggregateInput
    _min?: SoumissionMinOrderByAggregateInput
    _sum?: SoumissionSumOrderByAggregateInput
  }

  export type SoumissionScalarWhereWithAggregatesInput = {
    AND?: SoumissionScalarWhereWithAggregatesInput | SoumissionScalarWhereWithAggregatesInput[]
    OR?: SoumissionScalarWhereWithAggregatesInput[]
    NOT?: SoumissionScalarWhereWithAggregatesInput | SoumissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Soumission"> | number
    content?: JsonWithAggregatesFilter<"Soumission">
    email?: StringWithAggregatesFilter<"Soumission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Soumission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Soumission"> | Date | string
    formulaireId?: IntWithAggregatesFilter<"Soumission"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    active?: boolean
    refresh_token?: string | null
    reset_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprises?: EntrepriseCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    active?: boolean
    refresh_token?: string | null
    reset_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprises?: EntrepriseUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprises?: EntrepriseUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprises?: EntrepriseUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    active?: boolean
    refresh_token?: string | null
    reset_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateInput = {
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEntreprisesInput
    categorie?: CategorieCreateNestedOneWithoutEntreprisesInput
    photos?: GalerieCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalerieUncheckedCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEntreprisesNestedInput
    categorie?: CategorieUpdateOneWithoutEntreprisesNestedInput
    photos?: GalerieUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalerieUncheckedUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateManyInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntrepriseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprises?: EntrepriseCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprises?: EntrepriseUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprises?: EntrepriseUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprises?: EntrepriseUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormulaireCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutFormulairesInput
    inputs?: InputCreateNestedManyWithoutFormulaireInput
    soumissions?: SoumissionCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
    inputs?: InputUncheckedCreateNestedManyWithoutFormulaireInput
    soumissions?: SoumissionUncheckedCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutFormulairesNestedInput
    inputs?: InputUpdateManyWithoutFormulaireNestedInput
    soumissions?: SoumissionUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
    inputs?: InputUncheckedUpdateManyWithoutFormulaireNestedInput
    soumissions?: SoumissionUncheckedUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
  }

  export type FormulaireUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormulaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
  }

  export type GalerieCreateInput = {
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutPhotosInput
  }

  export type GalerieUncheckedCreateInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
  }

  export type GalerieUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type GalerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
  }

  export type GalerieCreateManyInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
  }

  export type GalerieUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
  }

  export type InputCreateInput = {
    name?: string
    type?: string
    required?: boolean
    formulaire: FormulaireCreateNestedOneWithoutInputsInput
    options?: OptionCreateNestedManyWithoutInputInput
  }

  export type InputUncheckedCreateInput = {
    id?: number
    name?: string
    type?: string
    required?: boolean
    formulaireId: number
    options?: OptionUncheckedCreateNestedManyWithoutInputInput
  }

  export type InputUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    formulaire?: FormulaireUpdateOneRequiredWithoutInputsNestedInput
    options?: OptionUpdateManyWithoutInputNestedInput
  }

  export type InputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    formulaireId?: IntFieldUpdateOperationsInput | number
    options?: OptionUncheckedUpdateManyWithoutInputNestedInput
  }

  export type InputCreateManyInput = {
    id?: number
    name?: string
    type?: string
    required?: boolean
    formulaireId: number
  }

  export type InputUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    formulaireId?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateInput = {
    value?: string
    input: InputCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateInput = {
    id?: number
    value?: string
    inputId: number
  }

  export type OptionUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    input?: InputUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    inputId?: IntFieldUpdateOperationsInput | number
  }

  export type OptionCreateManyInput = {
    id?: number
    value?: string
    inputId: number
  }

  export type OptionUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    inputId?: IntFieldUpdateOperationsInput | number
  }

  export type SoumissionCreateInput = {
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formulaire: FormulaireCreateNestedOneWithoutSoumissionsInput
  }

  export type SoumissionUncheckedCreateInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formulaireId: number
  }

  export type SoumissionUpdateInput = {
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaire?: FormulaireUpdateOneRequiredWithoutSoumissionsNestedInput
  }

  export type SoumissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaireId?: IntFieldUpdateOperationsInput | number
  }

  export type SoumissionCreateManyInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formulaireId: number
  }

  export type SoumissionUpdateManyMutationInput = {
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaireId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | $Enums.EnumRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EntrepriseListRelationFilter = {
    every?: EntrepriseWhereInput
    some?: EntrepriseWhereInput
    none?: EntrepriseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EntrepriseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    refresh_token?: SortOrder
    reset_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    refresh_token?: SortOrder
    reset_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    refresh_token?: SortOrder
    reset_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.EnumRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategorieNullableScalarRelationFilter = {
    is?: CategorieWhereInput | null
    isNot?: CategorieWhereInput | null
  }

  export type GalerieListRelationFilter = {
    every?: GalerieWhereInput
    some?: GalerieWhereInput
    none?: GalerieWhereInput
  }

  export type FormulaireListRelationFilter = {
    every?: FormulaireWhereInput
    some?: FormulaireWhereInput
    none?: FormulaireWhereInput
  }

  export type GalerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormulaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    cp?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    cp?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    city?: SortOrder
    cp?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    image?: SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrepriseSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    categorieId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntrepriseScalarRelationFilter = {
    is?: EntrepriseWhereInput
    isNot?: EntrepriseWhereInput
  }

  export type InputListRelationFilter = {
    every?: InputWhereInput
    some?: InputWhereInput
    none?: InputWhereInput
  }

  export type SoumissionListRelationFilter = {
    every?: SoumissionWhereInput
    some?: SoumissionWhereInput
    none?: SoumissionWhereInput
  }

  export type InputOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SoumissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormulaireCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type FormulaireAvgOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
  }

  export type FormulaireMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type FormulaireMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type FormulaireSumOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
  }

  export type GalerieCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type GalerieAvgOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
  }

  export type GalerieMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type GalerieMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrepriseId?: SortOrder
  }

  export type GalerieSumOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
  }

  export type FormulaireScalarRelationFilter = {
    is?: FormulaireWhereInput
    isNot?: FormulaireWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InputCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    formulaireId?: SortOrder
  }

  export type InputAvgOrderByAggregateInput = {
    id?: SortOrder
    formulaireId?: SortOrder
  }

  export type InputMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    formulaireId?: SortOrder
  }

  export type InputMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    required?: SortOrder
    formulaireId?: SortOrder
  }

  export type InputSumOrderByAggregateInput = {
    id?: SortOrder
    formulaireId?: SortOrder
  }

  export type InputScalarRelationFilter = {
    is?: InputWhereInput
    isNot?: InputWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    inputId?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    id?: SortOrder
    inputId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    inputId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    inputId?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    id?: SortOrder
    inputId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SoumissionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formulaireId?: SortOrder
  }

  export type SoumissionAvgOrderByAggregateInput = {
    id?: SortOrder
    formulaireId?: SortOrder
  }

  export type SoumissionMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formulaireId?: SortOrder
  }

  export type SoumissionMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formulaireId?: SortOrder
  }

  export type SoumissionSumOrderByAggregateInput = {
    id?: SortOrder
    formulaireId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EntrepriseCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput> | EntrepriseCreateWithoutOwnerInput[] | EntrepriseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutOwnerInput | EntrepriseCreateOrConnectWithoutOwnerInput[]
    createMany?: EntrepriseCreateManyOwnerInputEnvelope
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
  }

  export type EntrepriseUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput> | EntrepriseCreateWithoutOwnerInput[] | EntrepriseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutOwnerInput | EntrepriseCreateOrConnectWithoutOwnerInput[]
    createMany?: EntrepriseCreateManyOwnerInputEnvelope
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.EnumRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EntrepriseUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput> | EntrepriseCreateWithoutOwnerInput[] | EntrepriseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutOwnerInput | EntrepriseCreateOrConnectWithoutOwnerInput[]
    upsert?: EntrepriseUpsertWithWhereUniqueWithoutOwnerInput | EntrepriseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EntrepriseCreateManyOwnerInputEnvelope
    set?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    disconnect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    delete?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    update?: EntrepriseUpdateWithWhereUniqueWithoutOwnerInput | EntrepriseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EntrepriseUpdateManyWithWhereWithoutOwnerInput | EntrepriseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntrepriseUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput> | EntrepriseCreateWithoutOwnerInput[] | EntrepriseUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutOwnerInput | EntrepriseCreateOrConnectWithoutOwnerInput[]
    upsert?: EntrepriseUpsertWithWhereUniqueWithoutOwnerInput | EntrepriseUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: EntrepriseCreateManyOwnerInputEnvelope
    set?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    disconnect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    delete?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    update?: EntrepriseUpdateWithWhereUniqueWithoutOwnerInput | EntrepriseUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: EntrepriseUpdateManyWithWhereWithoutOwnerInput | EntrepriseUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEntreprisesInput = {
    create?: XOR<UserCreateWithoutEntreprisesInput, UserUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntreprisesInput
    connect?: UserWhereUniqueInput
  }

  export type CategorieCreateNestedOneWithoutEntreprisesInput = {
    create?: XOR<CategorieCreateWithoutEntreprisesInput, CategorieUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutEntreprisesInput
    connect?: CategorieWhereUniqueInput
  }

  export type GalerieCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput> | GalerieCreateWithoutEntrepriseInput[] | GalerieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutEntrepriseInput | GalerieCreateOrConnectWithoutEntrepriseInput[]
    createMany?: GalerieCreateManyEntrepriseInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type FormulaireCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput> | FormulaireCreateWithoutEntrepriseInput[] | FormulaireUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: FormulaireCreateOrConnectWithoutEntrepriseInput | FormulaireCreateOrConnectWithoutEntrepriseInput[]
    createMany?: FormulaireCreateManyEntrepriseInputEnvelope
    connect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
  }

  export type GalerieUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput> | GalerieCreateWithoutEntrepriseInput[] | GalerieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutEntrepriseInput | GalerieCreateOrConnectWithoutEntrepriseInput[]
    createMany?: GalerieCreateManyEntrepriseInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type FormulaireUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput> | FormulaireCreateWithoutEntrepriseInput[] | FormulaireUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: FormulaireCreateOrConnectWithoutEntrepriseInput | FormulaireCreateOrConnectWithoutEntrepriseInput[]
    createMany?: FormulaireCreateManyEntrepriseInputEnvelope
    connect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEntreprisesNestedInput = {
    create?: XOR<UserCreateWithoutEntreprisesInput, UserUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntreprisesInput
    upsert?: UserUpsertWithoutEntreprisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntreprisesInput, UserUpdateWithoutEntreprisesInput>, UserUncheckedUpdateWithoutEntreprisesInput>
  }

  export type CategorieUpdateOneWithoutEntreprisesNestedInput = {
    create?: XOR<CategorieCreateWithoutEntreprisesInput, CategorieUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutEntreprisesInput
    upsert?: CategorieUpsertWithoutEntreprisesInput
    disconnect?: CategorieWhereInput | boolean
    delete?: CategorieWhereInput | boolean
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutEntreprisesInput, CategorieUpdateWithoutEntreprisesInput>, CategorieUncheckedUpdateWithoutEntreprisesInput>
  }

  export type GalerieUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput> | GalerieCreateWithoutEntrepriseInput[] | GalerieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutEntrepriseInput | GalerieCreateOrConnectWithoutEntrepriseInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutEntrepriseInput | GalerieUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: GalerieCreateManyEntrepriseInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutEntrepriseInput | GalerieUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutEntrepriseInput | GalerieUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type FormulaireUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput> | FormulaireCreateWithoutEntrepriseInput[] | FormulaireUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: FormulaireCreateOrConnectWithoutEntrepriseInput | FormulaireCreateOrConnectWithoutEntrepriseInput[]
    upsert?: FormulaireUpsertWithWhereUniqueWithoutEntrepriseInput | FormulaireUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: FormulaireCreateManyEntrepriseInputEnvelope
    set?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    disconnect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    delete?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    connect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    update?: FormulaireUpdateWithWhereUniqueWithoutEntrepriseInput | FormulaireUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: FormulaireUpdateManyWithWhereWithoutEntrepriseInput | FormulaireUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: FormulaireScalarWhereInput | FormulaireScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GalerieUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput> | GalerieCreateWithoutEntrepriseInput[] | GalerieUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutEntrepriseInput | GalerieCreateOrConnectWithoutEntrepriseInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutEntrepriseInput | GalerieUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: GalerieCreateManyEntrepriseInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutEntrepriseInput | GalerieUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutEntrepriseInput | GalerieUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type FormulaireUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput> | FormulaireCreateWithoutEntrepriseInput[] | FormulaireUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: FormulaireCreateOrConnectWithoutEntrepriseInput | FormulaireCreateOrConnectWithoutEntrepriseInput[]
    upsert?: FormulaireUpsertWithWhereUniqueWithoutEntrepriseInput | FormulaireUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: FormulaireCreateManyEntrepriseInputEnvelope
    set?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    disconnect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    delete?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    connect?: FormulaireWhereUniqueInput | FormulaireWhereUniqueInput[]
    update?: FormulaireUpdateWithWhereUniqueWithoutEntrepriseInput | FormulaireUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: FormulaireUpdateManyWithWhereWithoutEntrepriseInput | FormulaireUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: FormulaireScalarWhereInput | FormulaireScalarWhereInput[]
  }

  export type EntrepriseCreateNestedManyWithoutCategorieInput = {
    create?: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput> | EntrepriseCreateWithoutCategorieInput[] | EntrepriseUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategorieInput | EntrepriseCreateOrConnectWithoutCategorieInput[]
    createMany?: EntrepriseCreateManyCategorieInputEnvelope
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
  }

  export type EntrepriseUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput> | EntrepriseCreateWithoutCategorieInput[] | EntrepriseUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategorieInput | EntrepriseCreateOrConnectWithoutCategorieInput[]
    createMany?: EntrepriseCreateManyCategorieInputEnvelope
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
  }

  export type EntrepriseUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput> | EntrepriseCreateWithoutCategorieInput[] | EntrepriseUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategorieInput | EntrepriseCreateOrConnectWithoutCategorieInput[]
    upsert?: EntrepriseUpsertWithWhereUniqueWithoutCategorieInput | EntrepriseUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: EntrepriseCreateManyCategorieInputEnvelope
    set?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    disconnect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    delete?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    update?: EntrepriseUpdateWithWhereUniqueWithoutCategorieInput | EntrepriseUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: EntrepriseUpdateManyWithWhereWithoutCategorieInput | EntrepriseUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
  }

  export type EntrepriseUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput> | EntrepriseCreateWithoutCategorieInput[] | EntrepriseUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: EntrepriseCreateOrConnectWithoutCategorieInput | EntrepriseCreateOrConnectWithoutCategorieInput[]
    upsert?: EntrepriseUpsertWithWhereUniqueWithoutCategorieInput | EntrepriseUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: EntrepriseCreateManyCategorieInputEnvelope
    set?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    disconnect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    delete?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    connect?: EntrepriseWhereUniqueInput | EntrepriseWhereUniqueInput[]
    update?: EntrepriseUpdateWithWhereUniqueWithoutCategorieInput | EntrepriseUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: EntrepriseUpdateManyWithWhereWithoutCategorieInput | EntrepriseUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutFormulairesInput = {
    create?: XOR<EntrepriseCreateWithoutFormulairesInput, EntrepriseUncheckedCreateWithoutFormulairesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutFormulairesInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type InputCreateNestedManyWithoutFormulaireInput = {
    create?: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput> | InputCreateWithoutFormulaireInput[] | InputUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: InputCreateOrConnectWithoutFormulaireInput | InputCreateOrConnectWithoutFormulaireInput[]
    createMany?: InputCreateManyFormulaireInputEnvelope
    connect?: InputWhereUniqueInput | InputWhereUniqueInput[]
  }

  export type SoumissionCreateNestedManyWithoutFormulaireInput = {
    create?: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput> | SoumissionCreateWithoutFormulaireInput[] | SoumissionUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutFormulaireInput | SoumissionCreateOrConnectWithoutFormulaireInput[]
    createMany?: SoumissionCreateManyFormulaireInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type InputUncheckedCreateNestedManyWithoutFormulaireInput = {
    create?: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput> | InputCreateWithoutFormulaireInput[] | InputUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: InputCreateOrConnectWithoutFormulaireInput | InputCreateOrConnectWithoutFormulaireInput[]
    createMany?: InputCreateManyFormulaireInputEnvelope
    connect?: InputWhereUniqueInput | InputWhereUniqueInput[]
  }

  export type SoumissionUncheckedCreateNestedManyWithoutFormulaireInput = {
    create?: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput> | SoumissionCreateWithoutFormulaireInput[] | SoumissionUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutFormulaireInput | SoumissionCreateOrConnectWithoutFormulaireInput[]
    createMany?: SoumissionCreateManyFormulaireInputEnvelope
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
  }

  export type EntrepriseUpdateOneRequiredWithoutFormulairesNestedInput = {
    create?: XOR<EntrepriseCreateWithoutFormulairesInput, EntrepriseUncheckedCreateWithoutFormulairesInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutFormulairesInput
    upsert?: EntrepriseUpsertWithoutFormulairesInput
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutFormulairesInput, EntrepriseUpdateWithoutFormulairesInput>, EntrepriseUncheckedUpdateWithoutFormulairesInput>
  }

  export type InputUpdateManyWithoutFormulaireNestedInput = {
    create?: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput> | InputCreateWithoutFormulaireInput[] | InputUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: InputCreateOrConnectWithoutFormulaireInput | InputCreateOrConnectWithoutFormulaireInput[]
    upsert?: InputUpsertWithWhereUniqueWithoutFormulaireInput | InputUpsertWithWhereUniqueWithoutFormulaireInput[]
    createMany?: InputCreateManyFormulaireInputEnvelope
    set?: InputWhereUniqueInput | InputWhereUniqueInput[]
    disconnect?: InputWhereUniqueInput | InputWhereUniqueInput[]
    delete?: InputWhereUniqueInput | InputWhereUniqueInput[]
    connect?: InputWhereUniqueInput | InputWhereUniqueInput[]
    update?: InputUpdateWithWhereUniqueWithoutFormulaireInput | InputUpdateWithWhereUniqueWithoutFormulaireInput[]
    updateMany?: InputUpdateManyWithWhereWithoutFormulaireInput | InputUpdateManyWithWhereWithoutFormulaireInput[]
    deleteMany?: InputScalarWhereInput | InputScalarWhereInput[]
  }

  export type SoumissionUpdateManyWithoutFormulaireNestedInput = {
    create?: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput> | SoumissionCreateWithoutFormulaireInput[] | SoumissionUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutFormulaireInput | SoumissionCreateOrConnectWithoutFormulaireInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutFormulaireInput | SoumissionUpsertWithWhereUniqueWithoutFormulaireInput[]
    createMany?: SoumissionCreateManyFormulaireInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutFormulaireInput | SoumissionUpdateWithWhereUniqueWithoutFormulaireInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutFormulaireInput | SoumissionUpdateManyWithWhereWithoutFormulaireInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type InputUncheckedUpdateManyWithoutFormulaireNestedInput = {
    create?: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput> | InputCreateWithoutFormulaireInput[] | InputUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: InputCreateOrConnectWithoutFormulaireInput | InputCreateOrConnectWithoutFormulaireInput[]
    upsert?: InputUpsertWithWhereUniqueWithoutFormulaireInput | InputUpsertWithWhereUniqueWithoutFormulaireInput[]
    createMany?: InputCreateManyFormulaireInputEnvelope
    set?: InputWhereUniqueInput | InputWhereUniqueInput[]
    disconnect?: InputWhereUniqueInput | InputWhereUniqueInput[]
    delete?: InputWhereUniqueInput | InputWhereUniqueInput[]
    connect?: InputWhereUniqueInput | InputWhereUniqueInput[]
    update?: InputUpdateWithWhereUniqueWithoutFormulaireInput | InputUpdateWithWhereUniqueWithoutFormulaireInput[]
    updateMany?: InputUpdateManyWithWhereWithoutFormulaireInput | InputUpdateManyWithWhereWithoutFormulaireInput[]
    deleteMany?: InputScalarWhereInput | InputScalarWhereInput[]
  }

  export type SoumissionUncheckedUpdateManyWithoutFormulaireNestedInput = {
    create?: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput> | SoumissionCreateWithoutFormulaireInput[] | SoumissionUncheckedCreateWithoutFormulaireInput[]
    connectOrCreate?: SoumissionCreateOrConnectWithoutFormulaireInput | SoumissionCreateOrConnectWithoutFormulaireInput[]
    upsert?: SoumissionUpsertWithWhereUniqueWithoutFormulaireInput | SoumissionUpsertWithWhereUniqueWithoutFormulaireInput[]
    createMany?: SoumissionCreateManyFormulaireInputEnvelope
    set?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    disconnect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    delete?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    connect?: SoumissionWhereUniqueInput | SoumissionWhereUniqueInput[]
    update?: SoumissionUpdateWithWhereUniqueWithoutFormulaireInput | SoumissionUpdateWithWhereUniqueWithoutFormulaireInput[]
    updateMany?: SoumissionUpdateManyWithWhereWithoutFormulaireInput | SoumissionUpdateManyWithWhereWithoutFormulaireInput[]
    deleteMany?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
  }

  export type EntrepriseCreateNestedOneWithoutPhotosInput = {
    create?: XOR<EntrepriseCreateWithoutPhotosInput, EntrepriseUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutPhotosInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type EntrepriseUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<EntrepriseCreateWithoutPhotosInput, EntrepriseUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutPhotosInput
    upsert?: EntrepriseUpsertWithoutPhotosInput
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutPhotosInput, EntrepriseUpdateWithoutPhotosInput>, EntrepriseUncheckedUpdateWithoutPhotosInput>
  }

  export type FormulaireCreateNestedOneWithoutInputsInput = {
    create?: XOR<FormulaireCreateWithoutInputsInput, FormulaireUncheckedCreateWithoutInputsInput>
    connectOrCreate?: FormulaireCreateOrConnectWithoutInputsInput
    connect?: FormulaireWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutInputInput = {
    create?: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput> | OptionCreateWithoutInputInput[] | OptionUncheckedCreateWithoutInputInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutInputInput | OptionCreateOrConnectWithoutInputInput[]
    createMany?: OptionCreateManyInputInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutInputInput = {
    create?: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput> | OptionCreateWithoutInputInput[] | OptionUncheckedCreateWithoutInputInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutInputInput | OptionCreateOrConnectWithoutInputInput[]
    createMany?: OptionCreateManyInputInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type FormulaireUpdateOneRequiredWithoutInputsNestedInput = {
    create?: XOR<FormulaireCreateWithoutInputsInput, FormulaireUncheckedCreateWithoutInputsInput>
    connectOrCreate?: FormulaireCreateOrConnectWithoutInputsInput
    upsert?: FormulaireUpsertWithoutInputsInput
    connect?: FormulaireWhereUniqueInput
    update?: XOR<XOR<FormulaireUpdateToOneWithWhereWithoutInputsInput, FormulaireUpdateWithoutInputsInput>, FormulaireUncheckedUpdateWithoutInputsInput>
  }

  export type OptionUpdateManyWithoutInputNestedInput = {
    create?: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput> | OptionCreateWithoutInputInput[] | OptionUncheckedCreateWithoutInputInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutInputInput | OptionCreateOrConnectWithoutInputInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutInputInput | OptionUpsertWithWhereUniqueWithoutInputInput[]
    createMany?: OptionCreateManyInputInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutInputInput | OptionUpdateWithWhereUniqueWithoutInputInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutInputInput | OptionUpdateManyWithWhereWithoutInputInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutInputNestedInput = {
    create?: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput> | OptionCreateWithoutInputInput[] | OptionUncheckedCreateWithoutInputInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutInputInput | OptionCreateOrConnectWithoutInputInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutInputInput | OptionUpsertWithWhereUniqueWithoutInputInput[]
    createMany?: OptionCreateManyInputInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutInputInput | OptionUpdateWithWhereUniqueWithoutInputInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutInputInput | OptionUpdateManyWithWhereWithoutInputInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type InputCreateNestedOneWithoutOptionsInput = {
    create?: XOR<InputCreateWithoutOptionsInput, InputUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: InputCreateOrConnectWithoutOptionsInput
    connect?: InputWhereUniqueInput
  }

  export type InputUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<InputCreateWithoutOptionsInput, InputUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: InputCreateOrConnectWithoutOptionsInput
    upsert?: InputUpsertWithoutOptionsInput
    connect?: InputWhereUniqueInput
    update?: XOR<XOR<InputUpdateToOneWithWhereWithoutOptionsInput, InputUpdateWithoutOptionsInput>, InputUncheckedUpdateWithoutOptionsInput>
  }

  export type FormulaireCreateNestedOneWithoutSoumissionsInput = {
    create?: XOR<FormulaireCreateWithoutSoumissionsInput, FormulaireUncheckedCreateWithoutSoumissionsInput>
    connectOrCreate?: FormulaireCreateOrConnectWithoutSoumissionsInput
    connect?: FormulaireWhereUniqueInput
  }

  export type FormulaireUpdateOneRequiredWithoutSoumissionsNestedInput = {
    create?: XOR<FormulaireCreateWithoutSoumissionsInput, FormulaireUncheckedCreateWithoutSoumissionsInput>
    connectOrCreate?: FormulaireCreateOrConnectWithoutSoumissionsInput
    upsert?: FormulaireUpsertWithoutSoumissionsInput
    connect?: FormulaireWhereUniqueInput
    update?: XOR<XOR<FormulaireUpdateToOneWithWhereWithoutSoumissionsInput, FormulaireUpdateWithoutSoumissionsInput>, FormulaireUncheckedUpdateWithoutSoumissionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleFilter<$PrismaModel> | $Enums.EnumRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnumRole | EnumEnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnumRole[] | ListEnumEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.EnumRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EntrepriseCreateWithoutOwnerInput = {
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categorie?: CategorieCreateNestedOneWithoutEntreprisesInput
    photos?: GalerieCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalerieUncheckedCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutOwnerInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput>
  }

  export type EntrepriseCreateManyOwnerInputEnvelope = {
    data: EntrepriseCreateManyOwnerInput | EntrepriseCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithWhereUniqueWithoutOwnerInput = {
    where: EntrepriseWhereUniqueInput
    update: XOR<EntrepriseUpdateWithoutOwnerInput, EntrepriseUncheckedUpdateWithoutOwnerInput>
    create: XOR<EntrepriseCreateWithoutOwnerInput, EntrepriseUncheckedCreateWithoutOwnerInput>
  }

  export type EntrepriseUpdateWithWhereUniqueWithoutOwnerInput = {
    where: EntrepriseWhereUniqueInput
    data: XOR<EntrepriseUpdateWithoutOwnerInput, EntrepriseUncheckedUpdateWithoutOwnerInput>
  }

  export type EntrepriseUpdateManyWithWhereWithoutOwnerInput = {
    where: EntrepriseScalarWhereInput
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyWithoutOwnerInput>
  }

  export type EntrepriseScalarWhereInput = {
    AND?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
    OR?: EntrepriseScalarWhereInput[]
    NOT?: EntrepriseScalarWhereInput | EntrepriseScalarWhereInput[]
    id?: IntFilter<"Entreprise"> | number
    name?: StringFilter<"Entreprise"> | string
    email?: StringFilter<"Entreprise"> | string
    city?: StringFilter<"Entreprise"> | string
    cp?: StringFilter<"Entreprise"> | string
    address1?: StringFilter<"Entreprise"> | string
    address2?: StringNullableFilter<"Entreprise"> | string | null
    phone?: StringNullableFilter<"Entreprise"> | string | null
    description?: StringNullableFilter<"Entreprise"> | string | null
    image?: StringNullableFilter<"Entreprise"> | string | null
    ownerId?: IntFilter<"Entreprise"> | number
    categorieId?: IntNullableFilter<"Entreprise"> | number | null
    createdAt?: DateTimeFilter<"Entreprise"> | Date | string
    updatedAt?: DateTimeFilter<"Entreprise"> | Date | string
  }

  export type UserCreateWithoutEntreprisesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    active?: boolean
    refresh_token?: string | null
    reset_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutEntreprisesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.EnumRole
    active?: boolean
    refresh_token?: string | null
    reset_token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutEntreprisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntreprisesInput, UserUncheckedCreateWithoutEntreprisesInput>
  }

  export type CategorieCreateWithoutEntreprisesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieUncheckedCreateWithoutEntreprisesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategorieCreateOrConnectWithoutEntreprisesInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutEntreprisesInput, CategorieUncheckedCreateWithoutEntreprisesInput>
  }

  export type GalerieCreateWithoutEntrepriseInput = {
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalerieUncheckedCreateWithoutEntrepriseInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalerieCreateOrConnectWithoutEntrepriseInput = {
    where: GalerieWhereUniqueInput
    create: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput>
  }

  export type GalerieCreateManyEntrepriseInputEnvelope = {
    data: GalerieCreateManyEntrepriseInput | GalerieCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type FormulaireCreateWithoutEntrepriseInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputs?: InputCreateNestedManyWithoutFormulaireInput
    soumissions?: SoumissionCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireUncheckedCreateWithoutEntrepriseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inputs?: InputUncheckedCreateNestedManyWithoutFormulaireInput
    soumissions?: SoumissionUncheckedCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireCreateOrConnectWithoutEntrepriseInput = {
    where: FormulaireWhereUniqueInput
    create: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput>
  }

  export type FormulaireCreateManyEntrepriseInputEnvelope = {
    data: FormulaireCreateManyEntrepriseInput | FormulaireCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEntreprisesInput = {
    update: XOR<UserUpdateWithoutEntreprisesInput, UserUncheckedUpdateWithoutEntreprisesInput>
    create: XOR<UserCreateWithoutEntreprisesInput, UserUncheckedCreateWithoutEntreprisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntreprisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntreprisesInput, UserUncheckedUpdateWithoutEntreprisesInput>
  }

  export type UserUpdateWithoutEntreprisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutEntreprisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumEnumRoleFieldUpdateOperationsInput | $Enums.EnumRole
    active?: BoolFieldUpdateOperationsInput | boolean
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUpsertWithoutEntreprisesInput = {
    update: XOR<CategorieUpdateWithoutEntreprisesInput, CategorieUncheckedUpdateWithoutEntreprisesInput>
    create: XOR<CategorieCreateWithoutEntreprisesInput, CategorieUncheckedCreateWithoutEntreprisesInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutEntreprisesInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutEntreprisesInput, CategorieUncheckedUpdateWithoutEntreprisesInput>
  }

  export type CategorieUpdateWithoutEntreprisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategorieUncheckedUpdateWithoutEntreprisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: GalerieWhereUniqueInput
    update: XOR<GalerieUpdateWithoutEntrepriseInput, GalerieUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<GalerieCreateWithoutEntrepriseInput, GalerieUncheckedCreateWithoutEntrepriseInput>
  }

  export type GalerieUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: GalerieWhereUniqueInput
    data: XOR<GalerieUpdateWithoutEntrepriseInput, GalerieUncheckedUpdateWithoutEntrepriseInput>
  }

  export type GalerieUpdateManyWithWhereWithoutEntrepriseInput = {
    where: GalerieScalarWhereInput
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type GalerieScalarWhereInput = {
    AND?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    OR?: GalerieScalarWhereInput[]
    NOT?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    id?: IntFilter<"Galerie"> | number
    path?: StringFilter<"Galerie"> | string
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
    updatedAt?: DateTimeFilter<"Galerie"> | Date | string
    entrepriseId?: IntFilter<"Galerie"> | number
  }

  export type FormulaireUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: FormulaireWhereUniqueInput
    update: XOR<FormulaireUpdateWithoutEntrepriseInput, FormulaireUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<FormulaireCreateWithoutEntrepriseInput, FormulaireUncheckedCreateWithoutEntrepriseInput>
  }

  export type FormulaireUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: FormulaireWhereUniqueInput
    data: XOR<FormulaireUpdateWithoutEntrepriseInput, FormulaireUncheckedUpdateWithoutEntrepriseInput>
  }

  export type FormulaireUpdateManyWithWhereWithoutEntrepriseInput = {
    where: FormulaireScalarWhereInput
    data: XOR<FormulaireUpdateManyMutationInput, FormulaireUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type FormulaireScalarWhereInput = {
    AND?: FormulaireScalarWhereInput | FormulaireScalarWhereInput[]
    OR?: FormulaireScalarWhereInput[]
    NOT?: FormulaireScalarWhereInput | FormulaireScalarWhereInput[]
    id?: IntFilter<"Formulaire"> | number
    name?: StringFilter<"Formulaire"> | string
    createdAt?: DateTimeFilter<"Formulaire"> | Date | string
    updatedAt?: DateTimeFilter<"Formulaire"> | Date | string
    entrepriseId?: IntFilter<"Formulaire"> | number
  }

  export type EntrepriseCreateWithoutCategorieInput = {
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEntreprisesInput
    photos?: GalerieCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutCategorieInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalerieUncheckedCreateNestedManyWithoutEntrepriseInput
    formulaires?: FormulaireUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutCategorieInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput>
  }

  export type EntrepriseCreateManyCategorieInputEnvelope = {
    data: EntrepriseCreateManyCategorieInput | EntrepriseCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithWhereUniqueWithoutCategorieInput = {
    where: EntrepriseWhereUniqueInput
    update: XOR<EntrepriseUpdateWithoutCategorieInput, EntrepriseUncheckedUpdateWithoutCategorieInput>
    create: XOR<EntrepriseCreateWithoutCategorieInput, EntrepriseUncheckedCreateWithoutCategorieInput>
  }

  export type EntrepriseUpdateWithWhereUniqueWithoutCategorieInput = {
    where: EntrepriseWhereUniqueInput
    data: XOR<EntrepriseUpdateWithoutCategorieInput, EntrepriseUncheckedUpdateWithoutCategorieInput>
  }

  export type EntrepriseUpdateManyWithWhereWithoutCategorieInput = {
    where: EntrepriseScalarWhereInput
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyWithoutCategorieInput>
  }

  export type EntrepriseCreateWithoutFormulairesInput = {
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEntreprisesInput
    categorie?: CategorieCreateNestedOneWithoutEntreprisesInput
    photos?: GalerieCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutFormulairesInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: GalerieUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutFormulairesInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutFormulairesInput, EntrepriseUncheckedCreateWithoutFormulairesInput>
  }

  export type InputCreateWithoutFormulaireInput = {
    name?: string
    type?: string
    required?: boolean
    options?: OptionCreateNestedManyWithoutInputInput
  }

  export type InputUncheckedCreateWithoutFormulaireInput = {
    id?: number
    name?: string
    type?: string
    required?: boolean
    options?: OptionUncheckedCreateNestedManyWithoutInputInput
  }

  export type InputCreateOrConnectWithoutFormulaireInput = {
    where: InputWhereUniqueInput
    create: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput>
  }

  export type InputCreateManyFormulaireInputEnvelope = {
    data: InputCreateManyFormulaireInput | InputCreateManyFormulaireInput[]
    skipDuplicates?: boolean
  }

  export type SoumissionCreateWithoutFormulaireInput = {
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoumissionUncheckedCreateWithoutFormulaireInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoumissionCreateOrConnectWithoutFormulaireInput = {
    where: SoumissionWhereUniqueInput
    create: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput>
  }

  export type SoumissionCreateManyFormulaireInputEnvelope = {
    data: SoumissionCreateManyFormulaireInput | SoumissionCreateManyFormulaireInput[]
    skipDuplicates?: boolean
  }

  export type EntrepriseUpsertWithoutFormulairesInput = {
    update: XOR<EntrepriseUpdateWithoutFormulairesInput, EntrepriseUncheckedUpdateWithoutFormulairesInput>
    create: XOR<EntrepriseCreateWithoutFormulairesInput, EntrepriseUncheckedCreateWithoutFormulairesInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutFormulairesInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutFormulairesInput, EntrepriseUncheckedUpdateWithoutFormulairesInput>
  }

  export type EntrepriseUpdateWithoutFormulairesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEntreprisesNestedInput
    categorie?: CategorieUpdateOneWithoutEntreprisesNestedInput
    photos?: GalerieUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutFormulairesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalerieUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type InputUpsertWithWhereUniqueWithoutFormulaireInput = {
    where: InputWhereUniqueInput
    update: XOR<InputUpdateWithoutFormulaireInput, InputUncheckedUpdateWithoutFormulaireInput>
    create: XOR<InputCreateWithoutFormulaireInput, InputUncheckedCreateWithoutFormulaireInput>
  }

  export type InputUpdateWithWhereUniqueWithoutFormulaireInput = {
    where: InputWhereUniqueInput
    data: XOR<InputUpdateWithoutFormulaireInput, InputUncheckedUpdateWithoutFormulaireInput>
  }

  export type InputUpdateManyWithWhereWithoutFormulaireInput = {
    where: InputScalarWhereInput
    data: XOR<InputUpdateManyMutationInput, InputUncheckedUpdateManyWithoutFormulaireInput>
  }

  export type InputScalarWhereInput = {
    AND?: InputScalarWhereInput | InputScalarWhereInput[]
    OR?: InputScalarWhereInput[]
    NOT?: InputScalarWhereInput | InputScalarWhereInput[]
    id?: IntFilter<"Input"> | number
    name?: StringFilter<"Input"> | string
    type?: StringFilter<"Input"> | string
    required?: BoolFilter<"Input"> | boolean
    formulaireId?: IntFilter<"Input"> | number
  }

  export type SoumissionUpsertWithWhereUniqueWithoutFormulaireInput = {
    where: SoumissionWhereUniqueInput
    update: XOR<SoumissionUpdateWithoutFormulaireInput, SoumissionUncheckedUpdateWithoutFormulaireInput>
    create: XOR<SoumissionCreateWithoutFormulaireInput, SoumissionUncheckedCreateWithoutFormulaireInput>
  }

  export type SoumissionUpdateWithWhereUniqueWithoutFormulaireInput = {
    where: SoumissionWhereUniqueInput
    data: XOR<SoumissionUpdateWithoutFormulaireInput, SoumissionUncheckedUpdateWithoutFormulaireInput>
  }

  export type SoumissionUpdateManyWithWhereWithoutFormulaireInput = {
    where: SoumissionScalarWhereInput
    data: XOR<SoumissionUpdateManyMutationInput, SoumissionUncheckedUpdateManyWithoutFormulaireInput>
  }

  export type SoumissionScalarWhereInput = {
    AND?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
    OR?: SoumissionScalarWhereInput[]
    NOT?: SoumissionScalarWhereInput | SoumissionScalarWhereInput[]
    id?: IntFilter<"Soumission"> | number
    content?: JsonFilter<"Soumission">
    email?: StringFilter<"Soumission"> | string
    createdAt?: DateTimeFilter<"Soumission"> | Date | string
    updatedAt?: DateTimeFilter<"Soumission"> | Date | string
    formulaireId?: IntFilter<"Soumission"> | number
  }

  export type EntrepriseCreateWithoutPhotosInput = {
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutEntreprisesInput
    categorie?: CategorieCreateNestedOneWithoutEntreprisesInput
    formulaires?: FormulaireCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateWithoutPhotosInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formulaires?: FormulaireUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseCreateOrConnectWithoutPhotosInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutPhotosInput, EntrepriseUncheckedCreateWithoutPhotosInput>
  }

  export type EntrepriseUpsertWithoutPhotosInput = {
    update: XOR<EntrepriseUpdateWithoutPhotosInput, EntrepriseUncheckedUpdateWithoutPhotosInput>
    create: XOR<EntrepriseCreateWithoutPhotosInput, EntrepriseUncheckedCreateWithoutPhotosInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutPhotosInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutPhotosInput, EntrepriseUncheckedUpdateWithoutPhotosInput>
  }

  export type EntrepriseUpdateWithoutPhotosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEntreprisesNestedInput
    categorie?: CategorieUpdateOneWithoutEntreprisesNestedInput
    formulaires?: FormulaireUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaires?: FormulaireUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type FormulaireCreateWithoutInputsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutFormulairesInput
    soumissions?: SoumissionCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireUncheckedCreateWithoutInputsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
    soumissions?: SoumissionUncheckedCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireCreateOrConnectWithoutInputsInput = {
    where: FormulaireWhereUniqueInput
    create: XOR<FormulaireCreateWithoutInputsInput, FormulaireUncheckedCreateWithoutInputsInput>
  }

  export type OptionCreateWithoutInputInput = {
    value?: string
  }

  export type OptionUncheckedCreateWithoutInputInput = {
    id?: number
    value?: string
  }

  export type OptionCreateOrConnectWithoutInputInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput>
  }

  export type OptionCreateManyInputInputEnvelope = {
    data: OptionCreateManyInputInput | OptionCreateManyInputInput[]
    skipDuplicates?: boolean
  }

  export type FormulaireUpsertWithoutInputsInput = {
    update: XOR<FormulaireUpdateWithoutInputsInput, FormulaireUncheckedUpdateWithoutInputsInput>
    create: XOR<FormulaireCreateWithoutInputsInput, FormulaireUncheckedCreateWithoutInputsInput>
    where?: FormulaireWhereInput
  }

  export type FormulaireUpdateToOneWithWhereWithoutInputsInput = {
    where?: FormulaireWhereInput
    data: XOR<FormulaireUpdateWithoutInputsInput, FormulaireUncheckedUpdateWithoutInputsInput>
  }

  export type FormulaireUpdateWithoutInputsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutFormulairesNestedInput
    soumissions?: SoumissionUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireUncheckedUpdateWithoutInputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
    soumissions?: SoumissionUncheckedUpdateManyWithoutFormulaireNestedInput
  }

  export type OptionUpsertWithWhereUniqueWithoutInputInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutInputInput, OptionUncheckedUpdateWithoutInputInput>
    create: XOR<OptionCreateWithoutInputInput, OptionUncheckedCreateWithoutInputInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutInputInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutInputInput, OptionUncheckedUpdateWithoutInputInput>
  }

  export type OptionUpdateManyWithWhereWithoutInputInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutInputInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: IntFilter<"Option"> | number
    value?: StringFilter<"Option"> | string
    inputId?: IntFilter<"Option"> | number
  }

  export type InputCreateWithoutOptionsInput = {
    name?: string
    type?: string
    required?: boolean
    formulaire: FormulaireCreateNestedOneWithoutInputsInput
  }

  export type InputUncheckedCreateWithoutOptionsInput = {
    id?: number
    name?: string
    type?: string
    required?: boolean
    formulaireId: number
  }

  export type InputCreateOrConnectWithoutOptionsInput = {
    where: InputWhereUniqueInput
    create: XOR<InputCreateWithoutOptionsInput, InputUncheckedCreateWithoutOptionsInput>
  }

  export type InputUpsertWithoutOptionsInput = {
    update: XOR<InputUpdateWithoutOptionsInput, InputUncheckedUpdateWithoutOptionsInput>
    create: XOR<InputCreateWithoutOptionsInput, InputUncheckedCreateWithoutOptionsInput>
    where?: InputWhereInput
  }

  export type InputUpdateToOneWithWhereWithoutOptionsInput = {
    where?: InputWhereInput
    data: XOR<InputUpdateWithoutOptionsInput, InputUncheckedUpdateWithoutOptionsInput>
  }

  export type InputUpdateWithoutOptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    formulaire?: FormulaireUpdateOneRequiredWithoutInputsNestedInput
  }

  export type InputUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    formulaireId?: IntFieldUpdateOperationsInput | number
  }

  export type FormulaireCreateWithoutSoumissionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entreprise: EntrepriseCreateNestedOneWithoutFormulairesInput
    inputs?: InputCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireUncheckedCreateWithoutSoumissionsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    entrepriseId: number
    inputs?: InputUncheckedCreateNestedManyWithoutFormulaireInput
  }

  export type FormulaireCreateOrConnectWithoutSoumissionsInput = {
    where: FormulaireWhereUniqueInput
    create: XOR<FormulaireCreateWithoutSoumissionsInput, FormulaireUncheckedCreateWithoutSoumissionsInput>
  }

  export type FormulaireUpsertWithoutSoumissionsInput = {
    update: XOR<FormulaireUpdateWithoutSoumissionsInput, FormulaireUncheckedUpdateWithoutSoumissionsInput>
    create: XOR<FormulaireCreateWithoutSoumissionsInput, FormulaireUncheckedCreateWithoutSoumissionsInput>
    where?: FormulaireWhereInput
  }

  export type FormulaireUpdateToOneWithWhereWithoutSoumissionsInput = {
    where?: FormulaireWhereInput
    data: XOR<FormulaireUpdateWithoutSoumissionsInput, FormulaireUncheckedUpdateWithoutSoumissionsInput>
  }

  export type FormulaireUpdateWithoutSoumissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entreprise?: EntrepriseUpdateOneRequiredWithoutFormulairesNestedInput
    inputs?: InputUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireUncheckedUpdateWithoutSoumissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrepriseId?: IntFieldUpdateOperationsInput | number
    inputs?: InputUncheckedUpdateManyWithoutFormulaireNestedInput
  }

  export type EntrepriseCreateManyOwnerInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    categorieId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntrepriseUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieUpdateOneWithoutEntreprisesNestedInput
    photos?: GalerieUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalerieUncheckedUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieCreateManyEntrepriseInput = {
    id?: number
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormulaireCreateManyEntrepriseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalerieUpdateWithoutEntrepriseInput = {
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormulaireUpdateWithoutEntrepriseInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputs?: InputUpdateManyWithoutFormulaireNestedInput
    soumissions?: SoumissionUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireUncheckedUpdateWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inputs?: InputUncheckedUpdateManyWithoutFormulaireNestedInput
    soumissions?: SoumissionUncheckedUpdateManyWithoutFormulaireNestedInput
  }

  export type FormulaireUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateManyCategorieInput = {
    id?: number
    name: string
    email: string
    city: string
    cp: string
    address1: string
    address2?: string | null
    phone?: string | null
    description?: string | null
    image?: string | null
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntrepriseUpdateWithoutCategorieInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutEntreprisesNestedInput
    photos?: GalerieUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: GalerieUncheckedUpdateManyWithoutEntrepriseNestedInput
    formulaires?: FormulaireUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    cp?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InputCreateManyFormulaireInput = {
    id?: number
    name?: string
    type?: string
    required?: boolean
  }

  export type SoumissionCreateManyFormulaireInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InputUpdateWithoutFormulaireInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: OptionUpdateManyWithoutInputNestedInput
  }

  export type InputUncheckedUpdateWithoutFormulaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    options?: OptionUncheckedUpdateManyWithoutInputNestedInput
  }

  export type InputUncheckedUpdateManyWithoutFormulaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SoumissionUpdateWithoutFormulaireInput = {
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateWithoutFormulaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoumissionUncheckedUpdateManyWithoutFormulaireInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionCreateManyInputInput = {
    id?: number
    value?: string
  }

  export type OptionUpdateWithoutInputInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateWithoutInputInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyWithoutInputInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
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