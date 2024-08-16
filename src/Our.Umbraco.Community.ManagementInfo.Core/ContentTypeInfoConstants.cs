namespace Our.Umbraco.Community.ManagementInfo.Core;

public class ContentTypeInfoConstants
{
    public static class Package
    {
        public const string Name = "ContentTypeInfo";
        public const string PluginPath = "/App_Plugins/ContentTypeInfo";
    }
    public static class Apps
    {
        public static class DocumentTypeInfo
        {
            public const string Alias = "contentTypeInfo";
            public const string Name = "Info";
            public const string Icon = "icon-info";
            public const string View = "/App_Plugins/ContentTypeInfo/info.html";
        }
    }
}
