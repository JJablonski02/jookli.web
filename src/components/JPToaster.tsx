import { Toaster } from "react-hot-toast"

export const JPToaster = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "var(--secondary-light)",
          paddingBlock: "10px",
          paddingInline: "50px",
          color: "#fff",
        },
        duration: 5000,
      }}
      position="top-center"
    />
  )
}
