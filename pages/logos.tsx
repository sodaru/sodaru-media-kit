import { demoPage } from "../node_modules/@solib/ui-components/dist/demo-utils/demoLayout";
import { getStaticPropsFactory } from "../node_modules/@solib/ui-components/dist/demo-utils/staticProps";
import { Logos } from "../src/Logos";

const Demo = () => <Logos />;

const Page = demoPage(Demo, "logos");

export default Page;

export const getStaticProps = getStaticPropsFactory(["logos"]);
