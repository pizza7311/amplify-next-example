import { defineBackend } from "@aws-amplify/backend";
import { test } from "./test/resource";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
defineBackend({
  test,
});
