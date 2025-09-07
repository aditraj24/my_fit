def get_recommended_colors(skin_tone_type: str, gender: str, weather: str, occasion: str) -> list[str]:
    """
    Generates a palette of recommended clothing colors based on various inputs.
    """
    colors = set()

    if skin_tone_type == 'light':
        colors.update(['Pastel Blue', 'Dusty Pink', 'Light Gray', 'Lavender', 'Soft Green'])
    elif skin_tone_type == 'medium':
        colors.update(['Olive Green', 'Burnt Orange', 'Teal', 'Mustard Yellow', 'Deep Red'])
    else: 
        colors.update(['Rich Burgundy', 'Royal Blue', 'Emerald Green', 'Gold', 'Magenta'])

    if occasion in ['Formal', 'Work']:
        colors.update(['Navy', 'Charcoal', 'White', 'Beige', 'Black'])
    elif occasion == 'Party':
        colors.update(['Silver', 'Red', 'Black', 'Gold', 'Royal Purple'])
    else: 
        colors.update(['Denim Blue', 'Cream', 'Khaki', 'Light Heather Gray'])

    if 'snow' in weather.lower() or 'cold' in weather.lower() or '-' in weather:
        colors.update(['Charcoal', 'Maroon', 'Forest Green'])
    elif 'sun' in weather.lower() or 'clear' in weather.lower() or 'warm' in weather.lower():
        colors.update(['White', 'Light Blue', 'Peach', 'Mint Green'])

    return list(colors)[:6]
