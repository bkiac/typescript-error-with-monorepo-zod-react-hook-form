# Reproducible type error in monorepo with different Zod, React Hook Form versions

Type error in [form-1](./apps/form-1/pages/index.tsx)

```
Argument of type 'ZodObject<{ foo: ZodString; bar: ZodString; }, "strip", ZodTypeAny, { foo?: string; bar?: string; }, { foo?: string; bar?: string; }>' is not assignable to parameter of type 'ZodType<any, any, any>'.
  Type 'ZodObject<{ foo: ZodString; bar: ZodString; }, "strip", ZodTypeAny, { foo?: string; bar?: string; }, { foo?: string; bar?: string; }>' is missing the following properties from type 'ZodType<any, any, any>': is, check
```

## Package versions

|                       | `form-1` | `form-2` |
| --------------------- | -------- | -------- |
| `zod`                 | `3.14.3` | `3.11.6` |
| `react-hook-form`     | `7.29.0` | `7.27.0` |
| `@hookform/resolvers` | `2.8.8`  | `2.8.8`  |
