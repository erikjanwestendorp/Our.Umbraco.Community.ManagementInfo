using Our.Umbraco.ContentTypeInfo.Assets.ManifestFilters;
using Umbraco.Cms.Core.DependencyInjection;

namespace Our.Umbraco.ContentTypeInfo.Assets.Compose;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder ConfigureAssets(this IUmbracoBuilder builder)
    {
        if (builder.ManifestFilters().Has<ContentTypeInfoManifestFilter>())
        {
            return builder;
        }

        builder.ManifestFilters().Append<ContentTypeInfoManifestFilter>();

        return builder;
    }
}
