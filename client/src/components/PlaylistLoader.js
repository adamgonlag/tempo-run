import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#b5b5b5"
    foregroundColor="#ff3cff"
    {...props}
  >
    <rect x="82" y="18" rx="3" ry="3" width="52" height="15" />
    <rect x="82" y="43" rx="3" ry="3" width="410" height="9" />
    <rect x="6" y="6" rx="0" ry="0" width="60" height="60" />
  </ContentLoader>
);

export default MyLoader;
