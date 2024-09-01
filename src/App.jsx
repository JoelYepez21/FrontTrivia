import AuthProvider from "./context/authContext";
import Root from "./router/Root";

function App() {
  return (
    <>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </>
  );
}

export default App;
