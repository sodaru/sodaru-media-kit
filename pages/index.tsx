import { demoPage } from "../node_modules/@solib/ui-components/dist/demo-utils/demoLayout";
import { getStaticPropsFactory } from "../node_modules/@solib/ui-components/dist/demo-utils/staticProps";

const Index = demoPage(undefined, "home");

export default Index;

export const getStaticProps = getStaticPropsFactory(["home"]);
