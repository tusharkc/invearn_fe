import BackButton from "../sharedComponents/BackButton";

const commonScreenOptions = {
  title: null,
  headerShown: true,
  headerTransparent: true,
  headerBackImage: () => <BackButton />,
  headerStyle: {
    backgroundColor: "#2A2B2B",
    elevation: 0,
    shadowOpacity: 0,
  },
};

export { commonScreenOptions };
