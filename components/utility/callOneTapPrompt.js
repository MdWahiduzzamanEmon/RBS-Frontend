const callOneTapPrompt = () => {
  const user = JSON.localStorage?.getItem("user");
  //   React.useEffect(() => {
  // if (divRef.current) {
  window.google?.accounts?.id?.initialize({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    // callback: handleCredentialResponse,
    cancel_on_tap_outside: false,
    // prompt_parent_id: callParentId(),
  });
  if (!user) {
    window.google?.accounts?.id?.prompt();
  }
  //   // window.google.accounts.id.cancel();
  //   }, []);
};

export default callOneTapPrompt;
