export interface ConfigOptions {}

type Accessor<In, Out> = Out | string | ((obj: In) => Out);

export interface __my_global_var_name__GenericInstance<ChainableInstance> {
  (element: HTMLElement): ChainableInstance;

  width(): number;
  width(width: number): ChainableInstance;
}

export type __my_global_var_name__Instance = __my_global_var_name__GenericInstance<__my_global_var_name__Instance>;

declare function __my_global_var_name__(configOptions?: ConfigOptions): __my_global_var_name__Instance;

export default __my_global_var_name__;