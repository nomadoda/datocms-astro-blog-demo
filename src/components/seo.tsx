import type { FC } from "react";
import { renderMetaTags } from "react-datocms";

export const SEO: FC<{ seo: any[]; favicon: any[] }> = ({ seo, favicon }) => {
  return <>{renderMetaTags([...seo, ...favicon])}</>;
};
