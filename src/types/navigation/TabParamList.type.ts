import TabRoute from 'enums/TabRoute.enum';

type TabParamList = {
  [TabRoute.Home]: undefined;
  [TabRoute.Explore]: undefined;
  [TabRoute.Profile]: undefined;
  [TabRoute.Profile]: undefined;
  [TabRoute.Settings]: undefined;
  [TabRoute.BookDetails]: { id: string };
};

export default TabParamList;
