Flows should ask questions then conditionally do something else (another flow, or an action) based on the response.

Typically these files are going to be lots of if cases and switching logic, since we're just deciding what to do on user response.

The reason we would put them in "flow" files is so that later on when you want to do some long "flow" with the user, e.g. adding a new repo, cloning its contents, and utilizing the necessary data in our app. e.g. there's a lot of stuff coming back from the github call that we don't need - just get us to where we need to be with that data, then pass it to the action, so the action doesn't have to do any prep work with what it's passed.
