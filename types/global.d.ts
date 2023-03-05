declare module "react-select" {
    const content: any;
  
    export const components: any;
    export default content;
  }

export type TitleType = "Services" | "Resources";

export interface SubLinkType{
  srcIcon: string;
  name: string;
  description: string;
}

export interface NavLinkType{
  title: TitleType;
  subLinks: SubLinkType[]
}

 