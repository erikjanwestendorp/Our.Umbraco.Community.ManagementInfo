using System.Collections.Generic;
using Our.Umbraco.ContentTypeInfo.Core;
using Umbraco.Cms.Core.Manifest;

namespace Our.Umbraco.ContentTypeInfo.Assets.ManifestFilters;

internal class ContentTypeInfoManifestFilter : IManifestFilter
{
    public void Filter(List<PackageManifest> manifests)
    {
        manifests.Add(new PackageManifest
        {
            PackageName = ContentTypeInfoConstants.Package.Name,
            Version = "1.0.0",
            AllowPackageTelemetry = true,
            BundleOptions = BundleOptions.None,
            Scripts = new[]
            {
                $"{ContentTypeInfoConstants.Package.PluginPath}/content-type-info.controller.js"
            }
        });
    }
}