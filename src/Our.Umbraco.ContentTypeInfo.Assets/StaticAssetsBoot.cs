using Our.Umbraco.ContentTypeInfo.Assets.Compose;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Our.Umbraco.ContentTypeInfo.Assets;

public class StaticAssetsBoot : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.ConfigureAssets();
    }
}