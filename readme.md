# pagination-fns

![test](https://github.com/ehmpathy/pagination-fns/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/pagination-fns/workflows/publish/badge.svg)

pagination with a pit-of-success

# install

```sh
npm install pagination-fns
```

# use

for example

```ts
import { PaginationInput } from 'pagination-fns';

const page: PaginationInput<{ createdAt: UniDateTime }> = {
  limit: 10,
  range: {
    until: asUniDateTime('2024-07-27T12:08:21')
  },
}
```
