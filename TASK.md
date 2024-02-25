# Objectives

- Using a dedicated service, fetch a list of posts from URL "https://jsonplaceholder.typicode.com/posts" - Display the first 3 of them on a page.

Use a subject to store the posts list.

Interface for Post looks like this:

```ts
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
```
