# Our.Umbraco.ContentTypeInfo

Small package that adds a content app to your Umbraco installation. This info content app will appear for Content Types only and give some extra information like:

- Id (int and Guid)
- Create Date
- Update Date
- UDI

## Enable Content App
After installing the package, you can make the Content App visible by registering it in the `Startup.cs` class.

```csharp
public void ConfigureServices(IServiceCollection services)
{

    services.AddUmbraco(_env, _config)
        .AddBackOffice()
        .AddWebsite()
        .AddComposers()
        // Register the content app
        .AddContentApp<ContentTypeInfoApp>()
        .Build();
}
```
