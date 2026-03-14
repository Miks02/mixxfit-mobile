import 'package:flutter/material.dart';
import 'package:mixxfit_mobile/core/theme/app_colors.dart';

class AppButton extends StatelessWidget {
  final String content;
  final bool isLoading;
  final VoidCallback? onPressed;
  final Gradient backgroundGradient;
  final Color textColor;

  const AppButton({
    super.key,
    required this.content,
    this.isLoading = false,
    this.backgroundGradient = AppColors.primaryGradient,
    this.textColor = AppColors.darkBlueGrey,
    this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    TextStyle textStyle = TextStyle(
      color: isLoading ? textColor.withValues(alpha: 0.5) : textColor,
      fontSize: 30,
      fontWeight: FontWeight.w600,
    );

    final borderRadius = BorderRadius.circular(12);

    return Opacity(
      opacity: isLoading ? 0.5 : 1,
      child: Container(
        decoration: BoxDecoration(
          gradient: backgroundGradient,
          borderRadius: borderRadius,
          boxShadow: const [BoxShadow(blurRadius: 5)],
        ),
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: isLoading ? null : onPressed,
            splashFactory: InkRipple.splashFactory,
            splashColor: Colors.white24,
            highlightColor: Colors.white10,
            borderRadius: borderRadius,
            child: Container(
              constraints: const BoxConstraints(minHeight: 50),
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 12),
              alignment: Alignment.center,
              child: isLoading
                  ? Row(
                      spacing: 20,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CircularProgressIndicator(
                          strokeWidth: 4,
                          color: Colors.orange.shade800,
                        ),
                        Text(content, style: textStyle),
                      ],
                    )
                  : Text(content, style: textStyle),
            ),
          ),
        ),
      ),
    );
  }
}
