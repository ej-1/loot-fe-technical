const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum aliquet tempor. Nunc nibh purus, posuere sit amet consectetur id, efficitur sit amet ipsum. Vestibulum et lacus sem. Donec tristique nec diam in suscipit. Phasellus pretium iaculis velit, non elementum ipsum convallis non. In hac habitasse platea dictumst. In hendrerit urna ac nisi rhoncus, ac efficitur urna luctus. Fusce ac nunc nec nisl fringilla suscipit. Sed posuere lacus et sollicitudin egestas.

Vivamus vel lectus quis ipsum pellentesque egestas. Curabitur consequat maximus laoreet. Duis eget tortor magna. Pellentesque egestas in urna eu sagittis. Nunc aliquet est ac lectus vehicula accumsan. Suspendisse ut justo faucibus mi semper vulputate. Integer erat orci, rhoncus id diam eget, iaculis aliquam orci. Nulla mollis nunc vel sagittis sollicitudin. Sed id vulputate lectus, in finibus massa. Mauris ut finibus libero, euismod feugiat massa. Nulla sed dignissim leo. Sed ultricies porta tincidunt. In vitae iaculis turpis. Donec congue turpis ut vulputate viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Quisque nec egestas sem. Integer et elit non mauris pretium feugiat. Etiam porta ante id sem egestas, quis aliquet dolor maximus. Nulla facilisi. Mauris ullamcorper sem in vulputate eleifend. Fusce diam urna, commodo eget sollicitudin id, convallis sit amet massa. Cras id ex rutrum, vulputate lectus nec, eleifend enim. Praesent id sem quis ligula ornare hendrerit. Sed pellentesque urna urna, ac fringilla ipsum sodales vitae. Sed sollicitudin turpis ante, eget aliquet enim condimentum non. Donec dictum orci eget dui ultrices sodales.

Integer blandit odio at lectus maximus tincidunt. Sed vestibulum luctus lorem ac efficitur. Etiam hendrerit purus in lobortis varius. Nunc varius nibh eu lectus mattis eleifend. Quisque posuere bibendum sodales. Sed venenatis egestas dui. Quisque eros sapien, volutpat vel ultrices non, elementum vel ante. Donec et tempor orci. Sed quis augue ut nisl vestibulum efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse eu neque mauris. Nullam non massa non nulla malesuada convallis.

Cras fringilla rutrum eros non egestas. Nulla dapibus risus ac tincidunt iaculis. Suspendisse vestibulum malesuada volutpat. Vestibulum ultricies consectetur turpis, eget mollis justo pulvinar nec. Sed ac semper quam. Nam imperdiet dolor ut urna sodales, et suscipit felis tempus. Pellentesque sollicitudin tincidunt dui, non ornare neque pretium vel. Cras varius sit amet massa eget porttitor. Maecenas ex felis, porttitor et mauris non, lacinia rhoncus arcu. Etiam blandit aliquet risus dapibus tempus. Aliquam turpis eros, euismod ac ante in, mattis mollis mauris. Praesent eget augue quam. Mauris lacinia sapien ac felis condimentum, eget posuere orci luctus.`

module.exports = {
  generate: (length) => {
    return text.substr(0, length)
  }
}