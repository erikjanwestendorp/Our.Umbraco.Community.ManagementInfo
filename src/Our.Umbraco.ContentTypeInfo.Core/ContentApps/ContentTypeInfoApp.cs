using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.ContentEditing;
using Umbraco.Cms.Core.Models.Membership;

namespace Our.Umbraco.ContentTypeInfo.Core.ContentApps;

public class ContentTypeInfoApp : IContentAppFactory
{
    public ContentApp? GetContentAppFor(object source, IEnumerable<IReadOnlyUserGroup> userGroups)
    {
        if (source is not IContentType)
        {
            return null;
        }

        if (userGroups.All(x => x.Alias.ToLowerInvariant() != Constants.Security.AdminGroupAlias))
        {
            return null;
        }

        return new ContentApp
        {
            Alias = ContentTypeInfoConstants.Apps.DocumentTypeInfo.Alias,
            Name = ContentTypeInfoConstants.Apps.DocumentTypeInfo.Name,
            Icon = ContentTypeInfoConstants.Apps.DocumentTypeInfo.Icon,
            View = ContentTypeInfoConstants.Apps.DocumentTypeInfo.View
        };
    }
}
